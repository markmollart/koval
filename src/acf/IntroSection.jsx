import React from 'react';

export const IntroSection = (props) => {
  const { title, subtitle } = props;
  return (
    <section className="intro-section">
      <div className="wrapper">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </section>
  )
}
