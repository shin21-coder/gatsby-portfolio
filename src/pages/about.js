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
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const options = {
  renderNode: {
    //こっちがリッチテキストの画像をうまいぐわいで表示させるやつ
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const fluid = useContentfulImage(

        node.data.target.fields.file["en-US"].url
      );
      return (
        <Image title={node.data.target.fields.title["en-US"]} fluid={fluid} />
      );

    },
    //こっちがリッチテキスト内の動画を上手く表示させるやつ
    [INLINES.HYPERLINK]: (node) => {
      if ((node.data.uri).includes("player.vimeo.com/video")) {
        return <IframeContainer><iframe title="Unique Title 001" src={node.data.uri} frameBorder="0" allowFullScreen></iframe></IframeContainer>
      } else if ((node.data.uri).includes("youtube.com/embed")) {
        return <IframeContainer><iframe title="Unique Title 002" src={node.data.uri} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowFullScreen></iframe></IframeContainer>
      } else {
        return <a href="https://twitter.com/leading5412">(twitter)</a>

      }
    }
  },
  //これは改行をちゃんと改行として認識させる処理
  renderText: text => {
    return text.split("\n").reduce((children, textSegment, index) => {
      return [...children, index > 0 && <br key={index} />, textSegment]
    }, [])
  },
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  skilltheme: {
    color: 'white',
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    width: '100px',
    textAlign: 'center',
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    backgroundColor: 'white',
    textAlign: 'center',
    lineHeight: '80px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: 'black'
  },
}));


const About = ({ data }) => {
  const classes = useStyles();



  const { contentfulHome: { content, image } } = data



  return (<Wrapper>
    <Layout>
      <div className={classes.skilltheme}>
        <div className={classes.circle}>About</div>
      </div>
      <h3 className="center">About me</h3>



      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs >
            <Paper className={classes.paper}><Image fixed={image.fixed} alt="aaa" /></Paper>
          </Grid>
          <Grid item xs={8} >
            <Paper className={classes.paper}> {documentToReactComponents(content.json, options)}</Paper>
          </Grid>
        </Grid>
      </div>



    </Layout>
  </Wrapper>
  )
}

export default About

export const query = graphql`
  {
    contentfulHome {
      title
      
        image {
          fixed(width:300) {
            ...GatsbyContentfulFixed
          }
        }
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


const Wrapper = styled.div`
.center{
  text-align:center;
  font-size:2rem;
  border-bottom: dashed 1px #87CEFA;
  margin: 10px auto;
  width: 200px;
}

`