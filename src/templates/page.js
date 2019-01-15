import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import * as AcfLayout from '../acf';
import SEO from '../components/SEO';

const AcfComponent = ({ location, componentName, item }) => {
  const ComponentName = AcfLayout[componentName];
  return (
    <ComponentName
      location={location}
      {...item}
    />
  );
};

export const PageTemplate = ({ title, content }) => {
  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data, location }) => {
  const { wordpressPage: page, site } = data;
  const { title, content, yoast, acf = {} } = page;
  const { layout } = acf;
  const { title: siteTitle } = site.siteMetadata;
  return (
    <Layout>
      <SEO
        title={`${yoast.metaTitle || title} | ${siteTitle}`}
        desc={yoast.metaDescription}
      />
      {layout ? layout.map(item => {
        if (!item.__typename) return null;
        const layoutComponentName = item.__typename.replace('WordPressAcf_','');
        return (
          <AcfComponent
            key={item.id}
            componentName={layoutComponentName}
            item={item}
            location={location}
          />
        );
      }) :
      <PageTemplate title={title} content={content} />
    }
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wordpressPage(id: { eq: $id }) {
      title
      content,
      yoast {
        metaTitle: title,
        metaDescription: metadesc
      }
      acf {
        layout: layout_page {
          __typename,
          ... on WordPressAcf_IntroSection {
            id,
            title,
            subtitle
          }
        }
      }
    }
  }
`
