import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import * as AcfLayout from '../acf';
import Layout from '../components/Layout';


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
    acf: {
      layout
    }
  } = page;
  const { title: siteTitle } = data.site.siteMetadata
  return (
    <Layout>
      <Helmet title={`${pageTitle} | ${siteTitle}`} />
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
