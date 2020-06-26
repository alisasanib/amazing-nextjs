import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useRouter } from 'next/router';

import './index.css';

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
    title: 'project 1',
    type: 'education',
    year: '2010',
    description: 'Nice one1',
  },
  {
    img: '/alex-wong-l5Tzv1alcps-unsplash.jpg',
    title: 'project 2',
    type: 'cuulture',
    year: '2011',
    description: 'Nice one2',
  },
  {
    img: '/alex-wong-l5Tzv1alcps-unsplash.jpg',
    title: 'project 3',
    type: 'commercial',
    year: '2020',
    description: 'Nice one3',
  },
  {
    img: '/alex-wong-l5Tzv1alcps-unsplash.jpg',
    title: 'project 4',
    type: 'education',
    year: '2019',
    description: 'Nice one4',
  },
  {
    img: '/alex-wong-l5Tzv1alcps-unsplash.jpg',
    title: 'project 5',
    type: 'cuulture',
    year: '2018',
    description: 'Nice one5',
  },
  {
    img: '/alex-wong-l5Tzv1alcps-unsplash.jpg',
    title: 'project 6',
    type: 'commercial',
    year: '2017',
    description: 'Nice one6',
  },
];

export default function ImageGridList() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <Grid lg={12} sm={12} xs={12} container spacing={5}>
        {console.log(
          '1234',
          router.query.category !== undefined || router.query.category !== 'all'
        )}
        {(router.query.category === undefined || router.query.category === 'all'
          ? tileData
          : tileData.filter((el) => el.type === router.query.category)
        ).map((tile) => (
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <div className="container">
              <img
                className="image"
                width="100%"
                src={tile.img}
                alt={tile.title}
              />
              <div class="top">
                <div class="text">
                  <div style={{textAlign:"left"}}>{tile.title}</div>
                </div>
              </div>
              <div class="middle">
                <div class="text">
                  <div style={{textAlign:"left"}}>{tile.year}</div>
                  <div>{tile.description}</div>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
