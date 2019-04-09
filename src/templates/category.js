import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostList from '../components/PostList';

const Category = props => {
  const { data, pageContext, location } = props
  const { edges: posts, totalCount } = data.allWordpressPost
  const { title: siteTitle } = data.site.siteMetadata
  const { name: category } = pageContext
  const title = `${totalCount} post${ totalCount === 1 ? '' : 's'} in the “${category}” category`

  return (
    <Layout location={location}>
      <SEO title={`${category} | ${siteTitle}`} />
      <PostList posts={posts} title={title} />
    </Layout>
  )
}

export default Category

export const pageQuery = graphql`
  query CategoryPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allWordpressPost(filter: { categories: { elemMatch: { slug: { eq: $slug } } } }) {
      totalCount
      edges {
        node {
          id
          # featuredImage: featured_media {
          #   localFile {
          #     childImageSharp {
          #       fluid(maxWidth: 1200, quality: 90) {
          #         ...GatsbyImageSharpFluid_withWebp_tracedSVG
          #       }
          #     }
          #   }
          # }
          title
          excerpt
          date(formatString: "MMMM DD, YYYY")
          slug
        }
      }
    }
  }
`
