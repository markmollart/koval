import React from 'react';
import { graphql } from 'gatsby';
import * as AcfLayout from '../acf';
import Layout from '../components/Layout';
import SEO from '../components/SEO';


const AcfComponent = ({ item, location, componentName }) => {
  const ComponentName = AcfLayout[componentName];
  return (
    <ComponentName
      location={location}
      {...item}
    />
  );
};

const Index = ({ data, location }) => {
  const { page } = data;
  const {
    pageTitle,
    yoast: {
      metaTitle,
      metaDescription
    },
    acf: {
      layout
    }
  } = page;
  const { title: siteTitle } = data.site.siteMetadata
  return (
    <Layout>
      <SEO
        title={metaTitle || `${pageTitle} | ${siteTitle}`}
        desc={metaDescription}
      />
      {layout && layout.map(item => {
        const layoutComponentName = item.internal.type.replace('WordPressAcf_','');
        return (
          <AcfComponent
            key={item.id}
            componentName={layoutComponentName}
            location={location}
            item={item}
          />
        );
      })}
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
      }
    }
    page: wordpressPage(slug: { eq: "home" }) {
      pageTitle: title
      yoast {
        metaTitle: title,
        metaDescription: metadesc
      },
      acf {
        layout: layout_page {
          ... on WordPressAcf_IntroSection {
            id
            internal {
              type
            }
            title
            subtitle
          }
        }
      }
    }
  }
`
