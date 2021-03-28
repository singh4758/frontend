import { Grid, Paper } from '@material-ui/core';
import { React, PureComponent } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import * as moment from 'moment';
import PropTypes from 'prop-types';
import data from '../../data';

class Player extends PureComponent {
  render() {
    const { match } = this.props;
    const { id } = match.params;
    const person = data.find((datas) => datas.id === id);
    console.log(person);
    return (
      <Grid container>
        <Grid item xs={12} style={{ marginBottom: 50 }}>
          <Grid container>
            <Paper elevation={5} style={{ display: 'flex', flexGrow: 1 }}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item style={{ flexGrow: 1 }}>
                    <img
                      src="SSG"
                      alt="Container"
                      style={{
                        display: 'block',
                        height: '175px',
                        backgroundColor: 'lightgray',
                      }}
                    />
                  </Grid>
                  <Grid item style={{ flexGrow: 4, padding: 10 }}>
                    <h1>{person.name}</h1>
                    <p>{moment(person.createdAt).format('ddd, MMMM Do YYYY, LTS')}</p>
                    <small>{person.email}</small>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid item>
              <Link
                style={{
                  padding: 25,
                  backgroundColor: 'darkblue',
                  textDecoration: 'none',
                  color: 'white',
                }}
                to="/"
              >
                Back
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

Player.propTypes = {
  match: PropTypes.instanceOf({}).isRequired,
};

export default withRouter(Player);
