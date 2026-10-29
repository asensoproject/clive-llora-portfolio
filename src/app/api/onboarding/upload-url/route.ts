import { randomUUID } from "crypto";
import { ONBOARDING } from "@/data/onboardingConfig";
import { supabaseAdmin } from "@/lib/supabaseAdmin";

const EXT: Record<string, string> = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/heic": "heic",
  "image/heif": "heif",
  "application/pdf": "pdf",
};

// Returns a one-time signed URL so the browser uploads the receipt straight to
// Supabase Storage (Vercel functions cap request bodies at 4.5 MB).
export async function POST(request: Request) {
  let body: { contentType?: string; size?: number };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const { contentType, size } = body;
  if (!contentType || !ONBOARDING.receipt.mimeTypes.includes(contentType)) {
    return Response.json({ error: "Upload a JPG, PNG, WEBP, HEIC or PDF file." }, { status: 400 });
  }
  if (typeof size !== "number" || size <= 0 || size > ONBOARDING.receipt.maxBytes) {
    return Response.json({ error: "The receipt must be 10 MB or smaller." }, { status: 400 });
  }

  const month = new Date().toISOString().slice(0, 7);
  const path = `${month}/${randomUUID()}.${EXT[contentType]}`;

  const { data, error } = await supabaseAdmin().storage.from(ONBOARDING.receipt.bucket).createSignedUploadUrl(path);
  if (error || !data) {
    console.error("createSignedUploadUrl failed", error);
    return Response.json({ error: "Could not prepare the upload. Please try again." }, { status: 500 });
  }

  return Response.json({ path: data.path, signedUrl: data.signedUrl });
}
