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
    <video width="400" controls>
  <source src="http://dmivll.mangomolo.com/dubaione/smil:dubaione.smil/playlist.m3u8" type="application/x-mpegURL">  
  Your browser does not support HTML5 video.
</video>
    </CardMedia>

     

<iframe
            className={classes.iframe}
            src="https://yayanheeh.github.io/live/plyr/Trans7.html"
            title="Material Design icons"
          />
        </div>
      </DashboardLayout>
    );
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Icons);
