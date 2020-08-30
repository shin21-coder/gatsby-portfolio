// scope css locally

import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import marked from "marked";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';

import Image from "gatsby-image"
import useContentfulImage from "../utils/useContentfulImage"




const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const fluid = useContentfulImage(
        node.data.target.fields.file["en-US"].url
      );
      return (
        <Image title={node.data.target.fields.title["en-US"]} fluid={fluid} />
      );
    
  }
  },
  renderText: text => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}

export default ({data}) => {
  
  const { contentfulHome: { content } } = data
  

  return <Layout>

 {documentToReactComponents(
            content.json,
            options
          )}

    
    
  </Layout>
}

export const query = graphql`
  {
    contentfulHome {
      content {
        json
      }
    }
  }
`



