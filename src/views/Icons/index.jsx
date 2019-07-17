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
            
        <CardMedia
          className={classes.media}
          image="http://202.80.222.166/000001/2/ch14041511545447343123/index.m3u8?virtualDomain=000001.live_hls.zte.com&IASHttpSessionId=SLB242102019071713433115345171"
          title="Contemplative Reptile"
        />
     

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
