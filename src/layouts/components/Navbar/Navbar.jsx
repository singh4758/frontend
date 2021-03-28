import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  button: {
    textDecoration: 'none',
    padding: 10,
    display: 'inline-block',
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
      <AppBar position="static" style={{ marginBottom: 20 }}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={2}>
              <h3>Trainee Portal</h3>
            </Grid>
            <Grid item xs={8}>
              <Grid container justify="center" alignItems="center" spacing={2}>
                <Grid item>
                  <Link to="/" className={classes.button}>TRAINEE</Link>
                </Grid>
                <Grid item>
                  <Link to="/textFieldDemo" className={classes.button}>TEXTFIELD DEMO</Link>
                </Grid>
                <Grid item>
                  <Link to="/inputDemo" className={classes.button}>INPUT DEMO</Link>
                </Grid>
                <Grid item>
                  <Link to="/testComponent" className={classes.button}>CHILDREN DEMO</Link>
                </Grid>
                <Grid item>
                  <Link to="/" className={classes.button}>LOGOUT</Link>
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
