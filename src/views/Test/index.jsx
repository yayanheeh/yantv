import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import withWidth from '@material-ui/core/withWidth';



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
    minHeight: '640px',
    border: 0
  }
});

class Icons extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Icons">
        <div className={classes.root}>
          <Grid container spacing={3}>
         <Grid item xs={6}>
          <Hidden smUp>
          mobile
        </Hidden>
          
            
        <Hidden xsDown>
          <iframe src="https://www.metube.id/embed/1?type=live&autoplay=true&mute=true" width="560" height="315" frameborder="0" allowfullscreen>
        </Hidden>
        </Grid>
          
          <Grid item xs={3}>
          <Paper className={classes.paper}>kiri</Paper>
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
