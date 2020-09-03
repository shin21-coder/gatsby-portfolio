import React from 'react'
import Layout from "../components/layout";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import Image from 'gatsby-image'
import ccccz from "../../static/ccccz.png"
import tunagu from "../../static/tunagu.png"

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
    display: 'flex',
    padding:0,
  },
  media: {
    height: 200,
  },
  center: {
    textAlign: 'center',
    fontSize: '2rem',
    borderBottom: 'dashed 1px #87CEFA',
    width: 200,
    margin:'20px auto'
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
});


const Portfolio = ({ data }) => {
  const { allContentfulImage: { edges } } = data


  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.skilltheme}>
        <div className={classes.circle}>Portfolio</div>
      </div>
        <h3 className={classes.center}>Portfolio Lists</h3>
       <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={ccccz}
            title="Contemplative Reptile"
            style={{backgroundSize:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            株式会社４C'z様
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ヒアリング、既存のWordPressテーマのカスタマイズを行いました
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={tunagu}
            title="Contemplative Reptile"
            style={{backgroundSize:"contain"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
              つなぐつむぐ様
          </Typography>
            
          <Typography variant="body2" color="textSecondary" component="p">
              ※製作途中<br></br>
              ヒアリング、既存のWordPressテーマのカスタマイズを行っています。予約システム等も取り入れています
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

      </CardActions>
      </Card>
      
  
      
    </Layout>
  )
}



export const query = graphql`
  {
    allContentfulImage {
      edges {
        node {
          portfolio {
            fixed {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
export default Portfolio