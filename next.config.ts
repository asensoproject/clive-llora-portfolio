import type { NextConfig } from "next";

// The single-page portfolio lives in its own Vercel project (clive-sample-portfolio)
// and is served here at /portfolio. Its assets use /portfolio/... paths.
const PORTFOLIO_ORIGIN = "https://clive-sample-portfolio-beta.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/portfolio", destination: `${PORTFOLIO_ORIGIN}/portfolio` },
      { source: "/portfolio/:path*", destination: `${PORTFOLIO_ORIGIN}/portfolio/:path*` },
    ];
  },
};

export default nextConfig;
