import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostList from '../components/PostList';

const Author = props => {
  const { data } = props
  const { authorsPosts, name } = data.wordpressWpUsers
  const totalCount = (authorsPosts && authorsPosts.length) || 0
  const { title: siteTitle } = data.site.siteMetadata
  const title = `${totalCount} post${totalCount === 1 ? '' : 's'} by ${name}`

  // The `authored_wordpress__POST` returns a simple array instead of an array
  // of edges / nodes. We therefore need to convert the array here.
  const posts = authorsPosts.map(post => ({
    node: post,
  }))

  return (
    <Layout>
      <SEO
        title={`${name} | ${siteTitle}`}
      />
      <PostList posts={posts} title={title} />
    </Layout>
  )
}

export default Author

export const pageQuery = graphql`
  query AuthorPage($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    wordpressWpUsers(id: { eq: $id }) {
      name
      authorsPosts: authored_wordpress__POST {
        ...PostListFields
      }
    }
  }
`
