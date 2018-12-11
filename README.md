# Koval: Gatsby WordPress

This starter is forked from the [gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms) and [gatsby-starter-wordpress](https://github.com/GatsbyCentral/gatsby-starter-wordpress)

* Edit `gatsby-config.js`, change `baseUrl`
  - Make sure you have at least 1 post and 1 page on your WordPress site

### Known Limitations

* Your WordPress site must have at least 1 post, or the starter will crash
* Nested pages / categories will not render with nested pages
  - A WordPress page like `/about/team/` will render on Gatsby as `/team/`
  - Likewise for categories

## CSS Processing

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/).
