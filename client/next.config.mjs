/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          // Match all routes
          source: "/(.*)",
          headers: [
            {
              key: "Referrer-Policy",
              value: "strict-origin-when-cross-origin", // or any other policy you need
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  