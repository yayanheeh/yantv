import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';
// Css
const YanMenu = withStyles({
  root: {
    color : #75bf00;
background-color : #fafff0;
background-repeat : repeat-x;
background-position : 50% top;
margin-top : 1px;
margin-bottom : 1px;
padding : 2px;
border : 1px solid #d4eba1;
}

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
          <YanMenu>TESSSTEDS</YanMenu>
          
          <iframe
            className={classes.iframe}
            src="https://material.io/tools/icons/?icon=accessibility&style=outline"
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
