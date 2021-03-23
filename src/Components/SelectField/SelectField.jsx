import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SelectField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
    };
  }

  changeSelect = (e) => {
    const { selectField } = this.props;
    selectField(e.target.value);
    if (e.target.value === 'Select') {
      this.setState({
        error: true,
      });
      return;
    }
    this.setState({
      error: false,
    });
  }

  render() {
    const { sport } = this.props;
    const { error } = this.state;
    return (
      <div className="SelectField">
        <h5>Select the game you Play</h5>
        <select value={sport || 'Select'} onChange={this.changeSelect}>
          <option value="Select">Select</option>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
        </select>
        { error && <p style={{ color: 'red' }}>Field is Required</p>}
      </div>
    );
  }
}

SelectField.propTypes = {
  selectField: PropTypes.func.isRequired,
  sport: PropTypes.string.isRequired,
};
