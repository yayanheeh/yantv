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
          <Hidden xl>
          <Grid item xs>
            <Paper className={classes.paper}>Destop</Paper>
          </Grid>
        </Hidden>
          
          <Hidden smUp>
          <Grid item xs>
            <Paper className={classes.paper}>Mobile</Paper>
          </Grid>
        </Hidden>
          
            
        <Hidden xsDown>
          <Paper className={classes.paper}>destop xsDown</Paper>
        </Hidden>
          
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
