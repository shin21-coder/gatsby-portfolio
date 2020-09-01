// scope css locally

import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS } from '@contentful/rich-text-types';

import Image from "gatsby-image"
import useContentfulImage from "../utils/useContentfulImage"
import { INLINES } from '@contentful/rich-text-types'
import styled from 'styled-components'




const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const fluid = useContentfulImage(
        node.data.target.fields.file["en-US"].url
      );
      return (
        <Image title={node.data.target.fields.title["en-US"]} fluid={fluid} />
      );
    
    },
    [INLINES.HYPERLINK]: (node) => {
      if ((node.data.uri).includes("player.vimeo.com/video")) {
        return <IframeContainer><iframe title="Unique Title 001" src={node.data.uri} frameBorder="0" allowFullScreen></iframe></IframeContainer>
      } else if ((node.data.uri).includes("youtube.com/embed")) {
        return <IframeContainer><iframe title="Unique Title 002" src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe></IframeContainer>
      }
    }
  },
  renderText: text => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}



const Post = (props) => {
  // console.log(props);

  // const option = {
  //   renderNode: {
  //     [INLINES.HYPERLINK]: (node) => {

  //       if((node.data.uri).includes("player.vimeo.com/video")){
  //         return <IframeContainer><iframe title="Unique Title 001" src={node.data.uri} frameBorder="0" allowFullScreen></iframe></IframeContainer>
  //       } else if((node.data.uri).includes("youtube.com/embed")) {
  //         return <IframeContainer><iframe title="Unique Title 002" src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe></IframeContainer>
  //       }
  //     }
  //   }
  // }
  // console.log(option);


 return(
  <div>
  {documentToReactComponents(props.data.contentfulHome.content.json, options)}
  </div>
 )
}

export default Post

export const query = graphql`
  {
    contentfulHome {
      content {
        json
      }
    }
  }
`

const IframeContainer = styled.span`
  padding-bottom: 56.25%; 
  position: relative; 
  display: block; 
  width: 100%;

  > iframe {
    height: 100%;
    width: 100%;
    position: absolute; 
    top: 0; 
    left: 0;
  }`


