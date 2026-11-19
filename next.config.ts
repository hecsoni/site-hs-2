import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Evita que um package-lock.json em uma pasta superior altere a raiz do build.
  outputFileTracingRoot: path.resolve(process.cwd()),
};

export default nextConfig;
