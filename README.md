# Koval: Gatsby WordPress ☄️

This starter is forked from the [gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms) and [gatsby-starter-wordpress](https://github.com/GatsbyCentral/gatsby-starter-wordpress)

## Getting started

* Create `.env.development` and `.env.production` using `.env.template` as a base

### Known Limitations

* Your WordPress site must have at least 1 post, or the starter will crash
* If using ACF flexible content fields, each field must exist somewhere on your site. Otherwise create a dummy page containing all flexible content fields

## Features

- Responsive images (gatsby-image)
  - The right image size for every screen size
  - Traced SVG Loading (Lazy-Loading)
  - WebP Support
- SEO
  - Sitemap
  - Schema.org JSONLD
  - OpenGraph Tags
  - Twitter Tags
  - Favicons
  - Canonical urls [gatsby-plugin-canonical-urls](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-canonical-urls)
  - Sitemap.xml generation using [gatsby-plugin-sitemap](https://www.npmjs.com/package/gatsby-plugin-sitemap)
  - Robots.txt generation using [gatsby-plugin-robots-txt](https://github.com/mdreizin/gatsby-plugin-robots-txt)
  - Google Tag Manager using [gatsby-plugin-google-tagmanager](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-tagmanager)
  - Enforced trailing slash using [gatsby-plugin-force-trailing-slashes](https://github.com/BayPhillips/gatsby-plugin-force-trailing-slashes)
- Offline Support
- WebApp Manifest Support
- Brotli compression
- CSS processing using [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/)
