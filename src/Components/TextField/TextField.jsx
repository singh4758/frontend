import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TextField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      errorName: '',
    };
  }

  inputChange = (e) => {
    const { textField } = this.props;
    textField(e.target.value);
  }

  checkError = () => {
    const { playerName } = this.props;
    if (playerName.length === 0) {
      this.setState({
        errorName: 'isTouched',
      });
      return;
    }
    if (playerName.length > 0 && playerName.length < 3) {
      this.setState({
        errorName: 'gotError',
      });
      return;
    }
    this.setState({
      errorName: '',
    });
  }

  render() {
    const { playerName } = this.props;
    const { errorName } = this.state;
    return (
      <div className="TextField">
        <h5>Name</h5>
        <input className={errorName} value={playerName} placeholder="Player Name" onChange={this.inputChange} onBlur={this.checkError} />
        { errorName === 'gotError' && <p style={{ color: 'red' }}> Enter more than two character </p> }
        { errorName === 'isTouched' && <p style={{ color: 'orange' }}>Name is required Field</p> }
      </div>
    );
  }
}

TextField.propTypes = {
  textField: PropTypes.func.isRequired,
  playerName: PropTypes.string.isRequired,
};
