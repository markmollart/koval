import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { Facebook } from './SEO/Facebook';
import { Twitter } from './SEO/Twitter';

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

export default class SEO extends Component {
  render() {
    const { title, desc, banner, post } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                siteUrl
                defaultTitle: title
                defaultDescription: description
                defaultBanner: banner
                siteLanguage
                twitter
                pwaShortName
              }
            }
          }
        `}
        render={({
          site: {
            siteMetadata: {
              siteUrl,
              defaultTitle,
              defaultDescription,
              defaultBanner,
              siteLanguage,
              twitter,
              pwaShortName,
            }
          }
        }) => {
          const seo = {
            title: title || defaultTitle,
            description: desc || defaultDescription,
            image: banner || defaultBanner,
            url: `${siteUrl}`,
          };


          let schemaOrgJSONLD = [
            {
              '@context': 'http://schema.org',
              '@type': 'WebSite',
              '@id': siteUrl,
              url: siteUrl,
              name: defaultTitle,
            },
          ];

          if (post) {
            schemaOrgJSONLD = [
              {
                '@context': 'http://schema.org',
                '@type': 'BlogPosting',
                '@id': seo.url,
                url: seo.url,
                name: title,
                headline: title,
                image: {
                  '@type': 'ImageObject',
                  url: seo.image,
                },
                description: seo.description,
                datePublished: post.data,
                dateModified: post.data,
                author: {
                  '@type': 'Person',
                  name: post.author || defaultTitle,
                },
                publisher: {
                  '@type': 'Organization',
                  name: post.author || defaultTitle,
                  logo: {
                    '@type': 'ImageObject',
                    url: `${siteUrl}/logos/logo-1200x630.jpg`,
                  },
                },
                isPartOf: siteUrl,
                mainEntityOfPage: {
                  '@type': 'WebSite',
                  '@id': siteUrl,
                },
              },
            ];
          }

          return (
            <>
              <Helmet title={seo.title}>
                <html lang={siteLanguage} />
                <meta name="description" content={seo.description} />
                <meta name="image" content={seo.image} />
                <meta name="apple-mobile-web-app-title" content={pwaShortName} />
                <meta name="application-name" content={pwaShortName} />
                <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
              </Helmet>
              <Facebook
                desc={seo.description}
                image={seo.image}
                title={seo.title}
                type={post ? 'article' : null}
                url={seo.url}
              />
              <Twitter title={seo.title} image={seo.image} desc={seo.description} username={twitter} />
            </>
          );
        }}
      />
    );
  }
}
