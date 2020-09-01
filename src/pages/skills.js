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
import Image from '../../static/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

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
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    // height: 450,これはoverflowにひつようだけどいまはいらん
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  background: {
    backgroundImage: `url(${Image})`,
    height: '300px',
    position:'relative'
  },
  skilltheme:{
    color: 'white',
    position: 'absolute',
    top: '50%',
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
  },
  subtitle: {
    fontSize:'2rem'
  },
  awesome: {
    fontSize:'5rem'
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
            <Paper className={classes.paper, classes.background}>
              <div className={classes.circle}>skills</div>

            </Paper>
            
            

          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}></Paper>

          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <div className={classes.rootgrid}>
                <GridList cellHeight={180} className={classes.gridList}>
                  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="h3" className={classes.subtitle}>Skill Lists</ListSubheader>
                  </GridListTile>
               
                    <GridListTile>
                      {/* <img src={tile.img} alt={tile.title} /> */}
                    <FontAwesomeIcon icon={['fab','html5']} className={classes.awesome} />
                    

                      <GridListTileBar
                        title='HTML'
                        subtitle={<span>html</span>}


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

