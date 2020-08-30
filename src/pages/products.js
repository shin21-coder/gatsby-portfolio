import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styles from "../components/products.module.css"
import Image from "gatsby-image"
import { Link } from "gatsby"
const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.text}></Image>
              <h3>
                {product.text}
              </h3>
              <Link to={`/products/${product.slugs}`}>more details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}


export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        text
            id
        slugs
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`


export default ComponentName
