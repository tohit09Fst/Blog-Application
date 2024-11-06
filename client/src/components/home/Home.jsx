import React from 'react';
import Banner from '../banner/Banner';
import Category from './Category';
import Grid from '@mui/material/Grid';
import Posts from './post/Posts';


export default function Home() {
  return (
    <>
      <Banner />
      <Grid container>
        <Grid item lg={2} xs={12} sm={2}>
          <Category />
        </Grid>
        <Grid container item xs={12} sm={10} lg={10} >
         <Posts/>
        </Grid>
      </Grid>
    </>
  );
}
