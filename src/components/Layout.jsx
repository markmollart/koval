import React from 'react';
import Helmet from 'react-helmet';
import '../sass/global/styles.scss';

const Layout = ({ children, location }) => (
  <div id="layout">
    <Helmet title="Home | Koval" />
    {/* Insert Header here */}
    <main>{children}</main>
    {/* Insert Footer here */}
  </div>
)

export default Layout
