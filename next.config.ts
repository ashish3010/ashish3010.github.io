import type { NextConfig } from "next";
const nextBuildId = require("next-build-id")


const nextConfig: NextConfig = {
  generateBuildId: async () => nextBuildId({ dir: __dirname }),
};

export default nextConfig;
