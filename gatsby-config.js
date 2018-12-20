require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const {
  NODE_ENV,
  IS_STAGING,
  BASE_URL,
  WORDPRESS_URL,
  WORDPRESS_PROTOCOL,
  JWT_USER,
  JWT_PASSWORD,
  SITE_NAME = 'Koval - Gatsby Wordpress',
  PWA_SHORT_NAME = 'Koval',
  PWA_BACKGROUND_COLOR = '#000000',
  PWA_THEME_COLOR = '#000000',
  gatsby_executing_command: GATSBY_CMD
} = process.env;

// Robots txt warning on build
if (IS_STAGING && NODE_ENV !== 'development') {
  console.log("\x1b[41m%s\x1b[0m" , 'blocking search engines, change IS_STAGING env variable to prevent this');
}
if (!IS_STAGING && NODE_ENV !== 'development') {
  console.log("\x1b[42m%s\x1b[0m" , 'visible to search engines, change IS_STAGING env variable to prevent this');
}

if (GATSBY_CMD !== 'serve') {
  // Env variable check
  const requiredEnvVariables = ['BASE_URL', 'WORDPRESS_URL', 'HOME_SLUG', 'WORDPRESS_PROTOCOL', 'JWT_USER', 'JWT_PASSWORD'];
  requiredEnvVariables.map((item) => {
    if (!process.env[item]) {
      throw Error(`Set ${item} env variable`);
    }
    return null;
  });
}

module.exports = {
  siteMetadata: {
    title: SITE_NAME,
    siteUrl: BASE_URL
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: '@import "resources.scss";',
        includePaths: [
          'src/sass/base',
        ],
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: WORDPRESS_URL,
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: WORDPRESS_PROTOCOL,
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {
          jwt_user: JWT_USER,
          jwt_pass: JWT_PASSWORD,
        },
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        includedRoutes: [
          "/*/*/posts",
          "/*/*/pages",
          "/*/*/media",
          "/*/*/categories",
          "/*/*/tags",
          "/*/*/taxonomies",
          "/*/*/users",
          "/*/*/users",
          "/acf/v2/options",
          "/jwt-auth/**",
          "/yoast/**",
          "/menus/**",
          "/wp-api-menus/**",
        ]
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: BASE_URL,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }`
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: null,
        sitemap: null,
        configFile: IS_STAGING ? 'robots-txt.staging.js' : 'robots-txt.production.js'
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-purgecss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: SITE_NAME,
        short_name: PWA_SHORT_NAME,
        start_url: '/',
        background_color: PWA_BACKGROUND_COLOR,
        theme_color: PWA_THEME_COLOR,
        display: 'standalone',
        icon: 'src/images/logo.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-brotli',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
