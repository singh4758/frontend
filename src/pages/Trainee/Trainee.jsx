import { Grid } from '@material-ui/core';
import { React, PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { AddDialog, Tables } from './components';

export default class Trainee extends PureComponent {
  render() {
    return (
      <>
        <AddDialog />
        <Tables />
        <Grid container spacing={2}>
          <ul>
            <li>
              <Grid item xs={12}>
                <Link to="/player/5c6c47af7740654f0915fac9">
                  Sachin Tendulkar
                </Link>
              </Grid>
            </li>
            <li>
              <Grid item xs={12}>
                <Link to="/player/5c6c47af7740654f0455fac9">
                  Virat Kohli
                </Link>
              </Grid>
            </li>
            <li>
              <Grid item xs={12}>
                <Link to="/player/5c6567af7740654f0915fac9">
                  MS. Dhoni
                </Link>
              </Grid>
            </li>
            <li>
              <Grid item xs={12}>
                <Link to="/player/5c6c47af7747854f0915fac9">
                  Rohit Sharma
                </Link>
              </Grid>
            </li>
            <li>
              <Grid item xs={12}>
                <Link to="/player/5c6c47af7740654f0915876c9">
                  Bumrah
                </Link>
              </Grid>
            </li>
          </ul>
        </Grid>
      </>
    );
  }
}
