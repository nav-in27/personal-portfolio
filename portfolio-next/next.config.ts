import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to GitHub Pages (nav-in27.github.io/personal-portfolio/), 
  // uncomment the next two lines:
  // basePath: '/personal-portfolio',
  // assetPrefix: '/personal-portfolio',
};

export default nextConfig;
