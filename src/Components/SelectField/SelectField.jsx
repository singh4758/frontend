import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class SelectField extends PureComponent {
  changeSelect = (e) => {
    const { selectField } = this.props;
    selectField(e.target.value);
  }

  render() {
    const { sport } = this.props;
    return (
      <div className="SelectField">
        <h5>Select the game you Play</h5>
        <select value={sport || 'Select'} onChange={this.changeSelect}>
          <option value="Select">Select</option>
          <option value="Cricket">Cricket</option>
          <option value="Football">Football</option>
        </select>
      </div>
    );
  }
}

SelectField.propTypes = {
  selectField: PropTypes.func.isRequired,
  sport: PropTypes.string.isRequired,
};
