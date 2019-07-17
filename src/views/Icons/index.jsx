import React, { Component } from 'react';

import CardMedia from '@material-ui/core/CardMedia';


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
            
        <CardMedia>
    <video width="300" controls>
  <source src="http://202.80.222.130/000001/2/ch00000090990000001730/index.m3u8?virtualDomain=000001.live_hls.zte.com" type="application/x-mpegURL">  
  </source>
</video>
    </CardMedia>

     
        </div>
      </DashboardLayout>
    );
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Icons);
