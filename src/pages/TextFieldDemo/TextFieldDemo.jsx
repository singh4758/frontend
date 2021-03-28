import { React, PureComponent } from 'react';
import { Grid, TextField } from '@material-ui/core';
import SliderFieldDemo from './SliderField/SliderFieldDemo';

export default class TextFieldDemo extends PureComponent {
  render() {
    return (
      <Grid container spacing={2} style={{ border: '1px solid black', margin: '20px', maxWidth: '95vw' }}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <SliderFieldDemo />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <h3>This is Disabled Input</h3>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue="Disabled Input"
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <h3>A valid Input</h3>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue="Accessible"
            style={{ border: '1px solid orange' }}
          />
        </Grid>
        <Grid item xs={12}>
          <h3>An Input With Error</h3>
          <TextField
            fullWidth
            variant="outlined"
            defaultValue="101"
            error
          />
        </Grid>
      </Grid>
    );
  }
}
