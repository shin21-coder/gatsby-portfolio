import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

const ComponentName = ({
  data: {
    product: {
      text,
      image: { fixed },
    },
  },
}) => {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">back to products</Link>
        <h1>single product : {text}</h1>
      </div>
      <section className="single-product">
        <article>
          <Image fixed={fixed} alt={text} />
        </article>
        <article>
          <h1>{text}</h1>
          <button>add to cart</button>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slugs: String) {
    product: contentfulProduct(slugs: { eq: $slugs }) {
      text
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`

export default ComponentName
