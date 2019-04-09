import React, { Component } from 'react';
import { Link } from 'gatsby';

export default class PostList extends Component {
  render() {
    const { posts, title = "Posts" } = this.props

    return (
      <section className="post-feed">
        <div className="wrapper">
          <h1 dangerouslySetInnerHTML={{__html: title}} />
          {posts && (
            <div className="feed-items">
              {posts.map(({ node: post }) => {
                const { title: postTitle, excerpt, featuredImage, slug } = post;
                return (
                  <div className="feed-item" key={post.id}>
                    <h2 dangerouslySetInnerHTML={{__html: postTitle}} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    )
  }
}
