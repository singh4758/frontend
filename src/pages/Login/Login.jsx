import { React, PureComponent } from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import * as Yup from 'yup';
import { PropTypes } from 'prop-types';
import { Formik, Form } from 'formik';
import { TextFieldWrapper as TextField } from '../Trainee/components/TextFieldWrapper';

const style = (theme) => ({
  root: {
    minWidth: theme.spacing(50),
    width: theme.spacing(50),
    height: theme.spacing(60),
    marginTop: theme.spacing(20),
  },
  button: {
    backgroundColor: 'purple',
    color: 'white',
  },
  disable: {
    backgroundColor: 'lightgray',
    color: 'gray',
  },
});

class Login extends PureComponent {
  constructor(props) {
    super(props);
    this.INITIAL_FORM_STATE = {
      email: '',
      password: '',
    };
    this.FORM_VALIDATION = Yup.object().shape({
      email: Yup.string()
        .email('Invalid Email')
        .required('Email is Required'),
      password: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .max(16, 'Password is too long - should be 16 chars maximum.')
        .required('Password is Required'),
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container justify="center">
        <Paper
          className={classes.root}
          elevation={5}
        >
          <Grid container justify="center">
            <Grid item xs={8}>
              <Grid container justify="center">
                <h3
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: 'red',
                    color: 'white',
                  }}
                >
                  <i className="fas fa-lock" />
                </h3>
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <Grid container justify="center">
                <h1 style={{ display: 'inline-block', marginTop: 0, marginBottom: 40 }}>Login</h1>
              </Grid>
            </Grid>
            <Grid container justify="center">
              <Grid item xs={10}>
                <Formik
                  initialValues={this.INITIAL_FORM_STATE}
                  validationSchema={this.FORM_VALIDATION}
                  onSubmit={(value) => {
                    console.log(value);
                  }}
                >
                  {(props) => (
                    <Form>
                      <Grid container justify="center" spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            type="submit"
                            primary
                            fullWidth
                            className={
                              (props.isValid && props.dirty) ? classes.button : classes.disable
                            }
                            disabled={!(props.isValid && props.dirty)}
                          >
                            Submit
                          </Button>
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.instanceOf({}).isRequired,
};

export default withStyles(style)(Login);
