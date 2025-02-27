const theme = require('./src/theme/theme');

/** @returns {Promise<import('@docusaurus/types').Config>} */
module.exports = async function createConfigAsync() {
  return {
    title: 'Bienvenido a Codax',
    tagline: 'Explora la plataforma de aprendizaje de programación en español que te lleva lleva de la mano desde principiante y da el primer paso hacia una emocionante carrera. ¡Comienza tu viaje hoy mismo con Codax!',
    organizationName: 'self-david',
    projectName: 'codax-documentation',
    baseUrl: '/',
    baseUrlIssueBanner: true,
    url: 'https://self-david.github.io/',

    trailingSlash: true,
    onBrokenLinks: 'ignore', // 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/docusaurus.ico',
    customFields: {
      crashTest: false,
      isDeployPreview: false,
      description: 'codax description',
    },
    plugins: [
      [
        'content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: 'errors',
          path: 'errors',
          routeBasePath: 'errors',
          // remarkPlugins: [npm2yarn],
          editCurrentVersion: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
        }),
      ],
      [
        'content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: 'datatypes',
          path: 'datatypes',
          routeBasePath: 'datatypes',
          // remarkPlugins: [npm2yarn],
          editCurrentVersion: false,
          sidebarPath: require.resolve('./sidebars.js'),
          // showLastUpdateAuthor: true,
          // showLastUpdateTime: true,
        }),
      ],
      [
        'content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: 'reservedWords',
          path: 'reservedWords',
          routeBasePath: 'reservedWords',
          editCurrentVersion: false,
          sidebarPath: require.resolve('./sidebars.js'),
        })
      ],
      [
        'content-docs',
        /** @type {import('@docusaurus/plugin-content-docs').Options} */
        ({
          id: 'estruct',
          path: 'estruct',
          routeBasePath: 'estruct',
          editCurrentVersion: false,
          sidebarPath: require.resolve('./sidebars.js'),
        })
      ],
    ],
    presets: [
      [
        'classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/self-david/codax-documentation/tree/main/',
            routeBasePath: '/methods',
            // routeBasePath: '/',
            // path: 'docs',
            // sidebarPath: 'sidebars.js',
            admonitions: {
              keywords: ['my-custom-admonition'],
            },
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            editUrl: 'https://github.com/self-david/codax-documentation/tree/main/',

            postsPerPage: 5,
            blogSidebarCount: 'ALL',
            blogSidebarTitle: 'All our posts',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo2.svg',
      navbar: {
        title: 'Codax',
        logo: {
          alt: 'My Meta Project Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Metodos',
          },
          {
            to: '/errors',
            label: 'Errores',
            position: 'left',
            activeBaseRegex: `/errors/`,
            // sidebarId: 'tutorialSidebar',
          }, 
          {
            to: '/datatypes',
            label: 'Tipos de dato',
            position: 'left',
            activeBaseRegex: `/datatypes/`,
            // sidebarId: 'tutorialSidebar',
          }, 
          {
            to: '/reservedWords',
            label: 'Palabras reservadas',
            position: 'left',
            activeBaseRegex: '/reservedWords/'
          },
          {
            to: '/estruct',
            label: 'Esctructuras de control',
            position: 'left',
            activeBaseRegex: '/estruct/'
          },
          // {to: 'blog', label: 'blog', position: 'left'}, // hidden
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/self-david/codax-documentation',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Informacion',
            items: [
              {
                label: 'Metodos',
                to: 'methods/',
              },
              {
                label: 'Errores',
                to: 'errors/',
              },
              {
                label: 'Tipos de dato',
                to: 'datatypes/',
              },
              {
                label: 'Palabras reservadas',
                to: 'reservedWords/'
              },
              {
                label: 'Estructuras de control',
                to: 'estruct/'
              }
            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacidad',
                href: 'https://opensource.fb.com/legal/privacy/',
              },
              {
                label: 'Terminos y condiciones',
                href: 'https://opensource.fb.com/legal/terms/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Codax Logo',
          // This default includes a positive & negative version, allowing for
          // appropriate use depending on your site's style.
          src: '/img/logo2.svg',
          href: 'https://codax.davidga.dev',
        },
        copyright: 'Copyright © 2023 Codax.',
      },
      prism: {
        theme,
      },
    }),
  };
};