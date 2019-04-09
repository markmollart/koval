import React from 'react'
import Layout from '../components/Layout'
// import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    {/* <SEO title={`404 | ${siteTitle}`} /> */}
    <section className="four-oh-four">
      <div className="wrapper">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
