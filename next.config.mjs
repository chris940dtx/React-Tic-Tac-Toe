/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, { dev }) {
      if (dev) {
        // Enable source maps during development
        config.devtool = 'source-map';
      }
      return config;
    },
  };
  
  export default nextConfig;