import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export default ({ article }) => (
  <div className="card">
    <Link to={`/blog/${article.slug}`}>
      <Img className="card-img-top" alt="" fluid={article.heroImage.fluid} />
    </Link>
    <div className="card-body">
      <h3 className="h4 mb-2">
        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
      </h3>
      <div className="mb-2">
        <small>{article.publishDate}</small>
      </div>
      <p
        dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
        }}
      />
    </div>
  </div>
)
