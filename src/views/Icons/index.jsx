import React, { Component } from 'react';

import CardMedia from '@material-ui/core/CardMedia';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';
// Component styles video 


// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
    yayan: {
    width: '100%',
    minHeight: '100px',
    border: 0
  }
});

class Icons extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Icons">
     
<div className={classes.root}>
 Memulai
Embed Youtube lebar penuh dengan React.js - Embed responsif
Kevin Simper
Kevin Simper
13 Jan · 1 mnt dibaca

Embed Youtube yang tidak responsif :(
Pada artikel ini, Anda akan belajar cara membuat komponen reaksi yang dapat Anda gunakan untuk membuat komponen reaksi sematan youtube yang responsif.
Setelah Anda menyematkan video youtube pertama Anda, Anda dengan cepat menyadari bahwa itu tidak responsif dan itu merusak desain Anda.
Sayangnya iframe tidak dapat mempertahankan rasio itu sendiri karena domain tersebut adalah pihak ketiga, Anda tidak diizinkan untuk mengetahui konten iframe karena alasan keamanan dan privasi.
Jadi apa yang bisa kamu lakukan?
Kita bisa membuat div yang membungkus embed dan skala itu secara default ke jendela atau orang tua dan menjaga skala. Itu dapat diarsipkan dengan menggunakan margin dan memiliki iframe dalam, skala hingga 100% baik lebar dan tinggi dan kemudian membatasi ketinggian untuk "56,25%" yang merupakan skala 16/9.
ekspor default ({youtubeId}) => { 
  return ( 
    <div 
      className = "video" 
      style = {{ 
        position: "relative", 
        paddingBottom: "56.25%" / * 16: 9 * /, 
        paddingTop: 25, 
        tinggi: 0 
      }} 
    > 
      <iframe 
        style = {{ 
          position: "absolute", 
          atas: 0, 
          kiri: 0, 
          lebar: "100%", 
          tinggi: "100%" 
        }} 
        src = {` https://www.youtube. com / embed / $ {youtubeId} ` } 
        frameBorder =" 0 " 
      /> 
    </div> 

</div>    
<div className={classes.root}>
      
              <div>
      <Paper className={classes.root}>
 
        <CardMedia>
    <video width="200" controls>
  <source src="http://202.80.222.130/000001/2/ch00000090990000001730/index.m3u8?virtualDomain=000001.live_hls.zte.com" type="application/x-mpegURL">  
  </source>
</video>
    </CardMedia>

     </Paper>
</div>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><video width="250" controls>
  <source src="http://202.80.222.130/000001/2/ch00000090990000001730/index.m3u8?virtualDomain=000001.live_hls.zte.com" type="application/x-mpegURL">  
  </source>
</video> </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}> test</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    

        </div>
      </DashboardLayout>
    );
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Icons);
