import { React, PureComponent } from 'react';
import { TextField } from '../../components';

export default class TextFieldDemo extends PureComponent {
  render() {
    return (
      <div className="TextFieldDemo">
        <div>
          <h5>This is disabled Input</h5>
          <TextField disabled />
        </div>
        <div>
          <h5>A Valid Input</h5>
          <TextField value="Accessible" />
        </div>
        <div>
          <h5>A Input with Error</h5>
          <TextField error="101" />
        </div>
      </div>
    );
  }
}
