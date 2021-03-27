import { React, PureComponent } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from '@material-ui/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextFieldWrapper as TextField } from '../../../TextFieldDemo';

export default class AddDialog extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.INITIAL_FORM_STATE = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };
    this.FORM_VALIDATION = Yup.object().shape({
      name: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid Email')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Password is too short - should be 8 chars minimum.')
        .max(16, 'Password is too long - should be 16 chars maximum.')
        .required('No Password is Provided'),
      passwordConfirm: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Please Enter Confirm Password'),
    });
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  }

  handleOpen = () => {
    this.setState({
      open: true,
    });
  }

  handleSubmit = () => {
    this.setState({
      open: false,
    });
  }

  render() {
    const { open } = this.state;
    return (
      <>
        <Button onClick={this.handleOpen} style={{ border: '1px solid blue', color: 'blue' }}>ADD TRAINEE</Button>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogContent>
            <DialogTitle style={{ paddingLeft: 0 }}>Add Trainee</DialogTitle>
            <DialogContentText>
              <h4 style={{ margin: 0, marginBottom: 20 }}>Enter Your Trainee Detail</h4>
              <Formik
                initialValues={{ ...this.INITIAL_FORM_STATE }}
                validationSchema={this.FORM_VALIDATION}
                onSubmit={(value) => {
                  console.log(value);
                  this.handleSubmit();
                }}
              >
                {(props) => (
                  <Form style={{ padding: 20 }}>
                    <Grid container justify="center" spacing={2}>
                      <Grid item xs={12}>
                        <Grid container justify="center">
                          <TextField
                            name="name"
                            placeholder="Enter Name"
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container justify="center">
                          <TextField
                            name="email"
                            placeholder="Enter Email"
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid container justify="center" spacing={2}>
                          <Grid item xs={6}>
                            <Grid container justify="center">
                              <TextField
                                type="password"
                                name="password"
                                placeholder="Enter Password"
                              />
                            </Grid>
                          </Grid>
                          <Grid item xs={6}>
                            <Grid container justify="center">
                              <TextField
                                type="password"
                                name="passwordConfirm"
                                placeholder="Enter Password"
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                    <DialogActions>
                      <Button onClick={this.handleClose} style={{ color: 'blue' }}>Cancel</Button>
                      <Button type="submit" disabled={!(props.isValid && props.dirty)}>
                        Submit
                      </Button>
                    </DialogActions>
                  </Form>
                )}
              </Formik>
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </>
    );
  }
}
