import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ButtonField extends PureComponent {
  render() {
    const {
      value,
      color,
      style,
      disabled,
      onClick,
    } = this.props;
    return (
      <div className="ButtonField">
        <input className={color === 'default' ? 'default' : 'primary'} onClick={onClick} style={style} disabled={disabled} type="button" value={value} />
      </div>
    );
  }
}

ButtonField.propTypes = {
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf.isRequired,
  disabled: PropTypes.bool.isRequired,
};
