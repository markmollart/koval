import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { getComponentData } from './utils';

export const IntroSection = (props) => {
  const { id } = props;
  return (
    <StaticQuery
      query={graphql`
        query {
          allIntroSections: allWordPressAcfIntroSection {
            edges {
              node {
                id,
                title,
                subtitle,
              }
            }
          },
        }
      `}
      render={data => {
        const { allIntroSections } = data;
        const introSection = getComponentData(allIntroSections, id);
        if (!introSection) return null;
        const { title, subtitle } = introSection;
        return (
          <section className="intro-section">
            <div className="wrap">
              <h1>{title}</h1>
              <h2>{subtitle}</h2>
            </div>
          </section>
        )
      }}
    />
  );
}
