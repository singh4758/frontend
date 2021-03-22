import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TextField extends PureComponent {
  inputChange = (e) => {
    const { textField } = this.props;
    textField(e.target.value);
  }

  render() {
    const { playerName } = this.props;
    return (
      <div className="TextField">
        <h5>Name</h5>
        <input value={playerName} placeholder="PlayerName" onChange={this.inputChange} />
      </div>
    );
  }
}

TextField.propTypes = {
  textField: PropTypes.func.isRequired,
  playerName: PropTypes.string.isRequired,
};
