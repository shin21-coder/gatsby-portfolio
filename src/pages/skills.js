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
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs={10}>
            <Paper className={classes.paper}>xs=10</Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>
              <div className={classes.rootgrid}>
                <GridList cellHeight={180} className={classes.gridList}>
                  <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    <ListSubheader component="div">December</ListSubheader>
                  </GridListTile>
                  {tileData.map((tile) => (
                    <GridListTile key={tile.img}>
                      <img src={tile.img} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        subtitle={<span>by: {tile.author}</span>}

                        actionIcon={
                          <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </GridListTile>
                  ))}
                </GridList>
              </div>


            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

