// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Apfel Kruemel Documentation",
  tagline: "Apfel Kruemel are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://coconut-xr.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Coconut XR", // Usually your GitHub org/user name.
  projectName: "apfel-kruemel", // Usually your repo name.

  trailingSlash: false,
  
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  staticDirectories: ["static"],
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/header.jpg",
      announcementBar: {
        id: "join_discord",
        content:
          'Got any questions? Join our <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/RbyaXJJaJM">Discord</a>!',
        backgroundColor: "#fafbfc",
        textColor: "#091E42",
        isCloseable: true,
      },
      navbar: {
        title: "Apfel Kruemel",
        logo: {
          alt: "Apfel Kruemel Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-light.svg"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "mainSidebar",
            position: "left",
            label: "Documentation",
          },
          { to: "/tutorials", label: "Tutorials", position: "left" },
          { to: "/showcases", label: "Showcases", position: "left" },
          {
            href: "https://github.com/coconut-xr",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: "Maintained by Coconut XR powered by Coconut Capital",
        links: [
          {
            title: "Coconut-XR Ecosystem",
            items: [
              {
                label: "Koestlich",
                href: "https://coconut-xr.github.io/koestlich/#/",
              },
              {
                label: "Natuerlich",
                href: "https://coconut-xr.github.io/natuerlich/#/",
              },
              {
                label: "Apfel Kruemel",
                href: "https://coconut-xr.github.io/apfel-kruemel/#/",
              },
            ],
          },

          {
            title: "Community",
            items: [
              {
                label: "Join our Discord",
                href: "https://discord.gg/RbyaXJJaJM",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/coconut_xr",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/coconut-xr",
              },
              {
                label: "Coconut XR",
                href: "https://coconut-xr.com",
              },
              {
                label: "Coconut Capital",
                href: "https://coconut.capital/",
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 95,
        max: 1024, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],
};

module.exports = config;
