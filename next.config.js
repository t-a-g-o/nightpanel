/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.ascendara.app'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://github.com/tagoWorks/ascendara/wiki',
        permanent: false,
      },
      {
        source: '/contribute',
        destination: 'https://github.com/tagoWorks/ascendara/wiki/contributing',
        permanent: false,
      },
      {
        source: '/donate',
        destination: 'https://www.paypal.com/paypalme/dayofearth',
        permanent: false,
      },
      {
        source: '/docs/howascendaraworks',
        destination: 'https://github.com/tagoWorks/ascendara/wiki/How-Ascendara-Works',
        permanent: false,
      },
      {
        source: '/docs/usageguide',
        destination: 'https://github.com/tagoWorks/ascendara/wiki/Usage-Guide',
        permanent: false,
      },
      {
        source: '/extension',
        destination: 'https://chromewebstore.google.com/detail/ascendara-download-blocke/ealmaonflbncbmofgpniamdfgobliffm',
        permanent: false,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/ap6W3xMTKW',
        permanent: false,
      },
      {
        source: '/uninstall',
        destination: 'https://form.jotform.com/242548640338056',
        permanent: false,
      },
      {
        source: '/whyamiseeingthis',
        destination: 'https://github.com/t-a-g-o/AscendaraDownloadBlocker/tree/main?tab=readme-ov-file#how-to-use-the-extension',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;