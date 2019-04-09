import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const BlogPost = ({ data }) => {
  const { wordpressPost: post, site, location } = data;
  const { title, content, yoast, categories, date, author } = post;
  const { title: siteTitle } = site.siteMetadata;
  return (
    <Layout location={location}>
      <SEO
        title={`${yoast.metaTitle || title} | ${siteTitle}`}
        desc={yoast.metaDescription}
      />
      <section className="post-container">
        <div className="wrapper">
          <h1>{title}</h1>
          <div className="post-content-body" dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </section>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      author {
        name
        slug
      },
      yoast {
        metaTitle: title,
        metaDescription: metadesc
      }
    }
  }
`
