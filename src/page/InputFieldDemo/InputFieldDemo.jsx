import { React, PureComponent } from 'react';
import { SelectField, TextField, RadioGroup } from '../../Components';

export default class InputFieldDemo extends PureComponent {
  constructor() {
    super();
    this.state = {
      playerName: '',
      sport: '',
      cricket: '',
      football: '',
    };
  }

  textField = (value) => {
    this.setState({
      playerName: value,
    });
  }

  selectField = (value) => {
    if (value === 'Select') {
      this.setState({
        sport: '',
        cricket: '',
        football: '',
      });
      return;
    }
    this.setState({
      sport: value,
      cricket: '',
      football: '',
    });
  }

  radioField = (value) => {
    const { sport } = this.state;
    if (sport === 'Cricket') {
      this.setState({
        cricket: value,
        football: '',
      });
    } else {
      this.setState({
        football: value,
        cricket: '',
      });
    }
  }

  render() {
    console.log(this.state);
    const { playerName, sport } = this.state;
    return (
      <div className="InputFieldDemo">
        <TextField textField={this.textField} playerName={playerName} />
        <SelectField selectField={this.selectField} sport={sport} />
        <RadioGroup changeRadio={this.radioField} sport={sport} />
      </div>
    );
  }
}
