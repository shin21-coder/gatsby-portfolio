import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  　//componentだからuseStaticQuery

  const {
    defaultTitle,
    defaultDescription,
    author,
  } = site.siteMetadata
  //siteMetaDataから得られた情報をconstにいれる

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  }
  //returnするために各要素をオブジェクトとして管理

  return (
    <Helmet title={seo.title}>
      <meta name="description" content={seo.description} />
      {/* 要素があったらそれをしてね！　＆＆ */}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
    </Helmet>
  )
}

export default SEO

// SEO.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
//   image: PropTypes.string,
//   article: PropTypes.bool,
//   //方のチェック
// }

// SEO.defaultProps = {
//   title: null,
//   description: null,
//   image: null,
//   article: false,
// }
//graphqlからのといいれ　
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        author
      }
    }
  }
`