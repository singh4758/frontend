import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  Grid,
  Button,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    color: 'white',
    '&:hover': {
      backgroundColor: 'darkBlue',
    },
  },
});

class Navbar extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <AppBar>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={2}>
              <h3>Trainee Portal</h3>
            </Grid>
            <Grid item xs={6}>
              <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item>
                  <Button className={classes.button}>TRAINEE</Button>
                </Grid>
                <Grid item>
                  <Button className={classes.button}>TEXTFIELD DEMO</Button>
                </Grid>
                <Grid item>
                  <Button className={classes.button}>INPUT DEMO</Button>
                </Grid>
                <Grid item>
                  <Button className={classes.button}>CHILDREN DEMO</Button>
                </Grid>
                <Grid item>
                  <Button className={classes.button}>LOGOUT</Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.instanceOf({}).isRequired,
};

export default withStyles(styles)(Navbar);
