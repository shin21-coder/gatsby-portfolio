import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import tileData from '../images/tileData.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import logo from '../../static/Gatsby.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rootgrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    // overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,これはoverflowにひつようだけどいまはいらん
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  background: {
    // backgroundImage: `url(${Image})`gat,
    height: '300px',
    position:'relative'
  },
  skilltheme:{
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

  subtitle: {
    fontSize: '2rem',
    borderBottom: 'dashed 1px #87CEFA ',
    display:'inline-block',
  },
  awesome: {
    fontSize:'5rem'
  },
  skillbottom: {
    marginBottom:10
  },
  gatsby: {
    width: 100,
    top:'30%'
  }

}));

export default function AutoGrid() {
  const classes = useStyles();
  library.add(fab) // FontAwesomeのライブラリ読み込み

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <div className={classes.skilltheme}>
              <div className={classes.circle}>skills</div>
              </div>
            

          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {/* <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}></Paper>

          </Grid> */}
          <Grid item xs>
            <Paper className={classes.paper}>
              <div className={classes.rootgrid}>
                <GridList cellHeight={180} className={classes.gridList}>
                  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="h3" className={classes.subtitle}>Skill Lists</ListSubheader>
                  </GridListTile>
              
                  <GridListTile >
                    
                    
                    <FontAwesomeIcon icon={['fab', 'html5']} className={classes.awesome} style={{
                      color:'#BD081C'
                    }}/>
                    

                    <GridListTileBar
                        title='HTML'
                      subtitle={<span>デザインカンプからの忠実なコーディング</span>}
                      className={classes.skillbottom}


                      />
                    </GridListTile>
                    <GridListTile >
                    
                    <FontAwesomeIcon icon={['fab','css3']} className={classes.awesome} style={{
                      color:'#146EB4'
                    }}/>
                    

                    <GridListTileBar
                        title='CSS3'
                      subtitle={<span>CSSを用いたアニメーション、デザイン</span>}
                      className={classes.skillbottom}


                      />
                    </GridListTile>
                    <GridListTile>
                    
                    <FontAwesomeIcon icon={['fab','sass']} className={classes.awesome} style={{
                      color: '#CD6799'
                      
                    }}/>
                    

                    <GridListTileBar
                        title='Sass'
                      subtitle={<span>CSSを効率よく記述する技術</span>}
                      className={classes.skillbottom}


                      />
                    </GridListTile>
                    <GridListTile>
                    
                    <FontAwesomeIcon icon={['fab','wordpress']} className={classes.awesome} style={{
                      color:'#21759B'
                    }}/>
                    

                    <GridListTileBar
                        title='WordPress'
                      subtitle={<span>WordPressを用いたテーマ開発、デザイン修正</span>}
                      className={classes.skillbottom}


                      />
                    </GridListTile>
                    <GridListTile>
                    
                    <FontAwesomeIcon icon={['fab','github']} className={classes.awesome} style={{
                      color:'black'
                    }}/>
                    

                    <GridListTileBar
                        title='GitHub'
                      subtitle={<span>Git,GitHubを使用したコード管理</span>}
                      className={classes.skillbottom}


                      />
                    </GridListTile>
                    <GridListTile>
                    
                    <FontAwesomeIcon icon={['fab','js']} className={classes.awesome} style={{
                      color:'#F4B400'
                    }}/>
                    

                    <GridListTileBar
                        title='JavaScript'
                      subtitle={<span>スライドショー等の動きのあるデザイン</span>}
                      className={classes.skillbottom}


                      />
                    </GridListTile>
                    <GridListTile>
                    
                    <FontAwesomeIcon icon={['fab', 'react']} className={classes.awesome} style={{
                      color: '#61DAFB'
                      
                    }}/>

                    
                    

                    <GridListTileBar
                        title='React(Gatsby.js)'
                      subtitle={<span>JavaScriptのライブラリの1つReact</span>}


                      />
                    </GridListTile>
                    <GridListTile>
                    
                    <img src={logo} className={classes.gatsby} />



                    
                    

                    <GridListTileBar
                        title='React(Gatsby.js)'
                      subtitle={<span>Reactのフレームワークの一つ、Gatsby.jsを用いたWeb制作<br></br>
                      このサイトはGatsby.js,Contentful,Netlifyを使用して作成</span>}


                      />
                    </GridListTile>
                
                </GridList>
              </div>


            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

