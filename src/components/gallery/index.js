import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './index.css'
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
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
}));

//  The example data is structured as follows:

//  import image from '/alex-wong-l5Tzv1alcps-unsplash.jpg';
//  [etc...]

const tileData = [
  {
    img: '/alex-wong-l5Tzv1alcps-unsplash.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: '/alex-wong-l5Tzv1alcps-unsplash.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: '/alex-wong-l5Tzv1alcps-unsplash.jpg',
    title: 'Image',
    author: 'author',
  },
];

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid lg={12} sm={12} xs={12} container spacing={5}>
        {tileData.map((tile) => (
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <div className="container">
              <img className="image" width="100%" src={tile.img} alt={tile.title} />
              <div class="middle">
                <div class="text">John Doe</div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
