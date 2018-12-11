import React from 'react';
import Helmet from 'react-helmet';
import '../sass/global/styles.scss';

import Navbar from './Navbar';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
