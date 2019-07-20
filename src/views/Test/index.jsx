import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';

// Menu

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';



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
      <DashboardLayout title="Yplay TV">
        <div className={classes.root}>
          
          <Hidden smUp>
          <video controls="" autoplay="" name="media"><source src="http://202.80.222.130/000001/2/ch15010918464887721048/index.m3u8?virtualDomain=000001.live_hls.zte.com" type="video/mp4"></video>
        </Hidden>
          
          
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
