module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Koval', // Default Site Title used for PWA
  description: 'A WordPress Gatsby boilerplate',
  siteLanguage: 'en', // Language Tag on <html> element
  banner: '/logos/logo-1200x630.jpg', // Default OpenGraph image
  ogLanguage: 'en_AU', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Koval', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Koval', // Author for schemaORGJSONLD
  themeColor: '#FFF',
  backgroundColor: '#FFF',

  twitter: 'example-twitter-handle', // Twitter Username
  facebook: 'Example Facebook Site Name', // Facebook Site Name
  googleTagManagerId: 'GTM-XXXXXXX',
};
