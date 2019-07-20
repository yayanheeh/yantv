import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

// Menu

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

// Tab

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  iframe: {
    width: '100%',
    minHeight: '500px',
    border: 0
  }
});

class Icons extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Yplay tv">
		   
		<Hidden smUp>
         <center> <video id="player" class="video-js vjs-default-skin" controls preload="auto" autoplay controls height="200" width="300">
							<source src="http://202.80.222.130/000001/2/ch15010918464887721048/index.m3u8?virtualDomain=000001.live_hls.zte.com" type="application/x-mpegURL">
		 </source></video></center>
            
            mobile
     <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="Full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>      

 </Hidden>
		   
		
		
		    
        <div className={classes.root}>
          
           <Hidden xsDown>
          
          <Grid container spacing={3}>
         <Grid item xs={8}>
       
          <iframe src="https://www.metube.id/embed/1?type=live&autoplay=true&mute=true" width="655" height="390" frameborder="0" allowfullscreen></iframe>
       
          
          <br/>
           
          <iframe
            className={classes.iframe}
            src="https://tv.yplay.online/comen"
            title="Komentar"
          />
        
          
                   </Grid>
          
            
            <Grid item xs>
           <Paper className={classes.paper}>
            <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://yayanheeh.github.io/live/logo/gtv.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Gtv"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {" Gtv Live Streaming"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://yayanheeh.github.io/live/logo/rcti.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Rcti"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {" Rcti Live Streaming"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://yayanheeh.github.io/live/logo/sctv.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sctv"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {' Sctv Live Streaming'}
            </React.Fragment>
          }
        />
      </ListItem>
    
             
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://yayanheeh.github.io/live/logo/gtv.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Gtv"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {" Gtv Live Streaming"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://yayanheeh.github.io/live/logo/rcti.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Rcti"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {" Rcti Live Streaming"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://yayanheeh.github.io/live/logo/sctv.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sctv"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {' Sctv Live Streaming'}
            </React.Fragment>
          }
        />
      </ListItem>
    
             
             
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://yayanheeh.github.io/live/logo/gtv.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Gtv"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {" Gtv Live Streaming"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://yayanheeh.github.io/live/logo/rcti.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Rcti"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {" Rcti Live Streaming"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://yayanheeh.github.io/live/logo/sctv.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sctv"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {' Sctv Live Streaming'}
            </React.Fragment>
          }
        />
      </ListItem>
    
             
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://yayanheeh.github.io/live/logo/gtv.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Gtv"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {" Gtv Live Streaming"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://yayanheeh.github.io/live/logo/rcti.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Rcti"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {" Rcti Live Streaming"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://yayanheeh.github.io/live/logo/sctv.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Sctv"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                
              </Typography>
              {' Sctv Live Streaming'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
            </Paper>
           
        </Grid>
          
          
            </Grid>
           </Hidden>

        </div>
      </DashboardLayout>
    );
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Icons);
