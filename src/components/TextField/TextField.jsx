import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { error as err, valid as val } from './style';

export default class TextField extends PureComponent {
  render() {
    const { value, error, disabled } = this.props;
    if (value) {
      return (
        <input style={val} value={value} />
      );
    }
    if (error) {
      return (
        <div>
          <input style={err} value={error} />
          <p style={{ color: 'red' }}>Could not be greater than</p>
        </div>
      );
    }
    return (
      <input style={{ width: '100%' }} value="Disabled Input" disabled={disabled} />
    );
  }
}

TextField.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};
