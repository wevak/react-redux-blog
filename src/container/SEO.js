import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({
  title,
  location,
  author
}) => {
  const structuredDataArticle =  `{
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://redux-blog-app.herokuapp.com${location}"
    },
    "headline": ${title},
    "author": {
      "@type": "Person",
      "name": ${author}
    }
  }`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={title} />
      <link rel="canonical" href="http://mysite.com/example" />
      <html lang="en" dir="ltr" />
      <script type="application/ld+json">
      { structuredDataArticle }
      </script>
    </Helmet>
  )
}

export default SEO