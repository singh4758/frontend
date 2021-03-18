import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class RadioGroup extends PureComponent {
  constructor(props) {
    super(props);
    const { sport } = this.props;
    this.state = {
      errorRadio: false,
      sport,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.sport !== state.sport) {
      return {
        errorRadio: false,
        sport: props.sport,
      };
    }
    return null;
  }

  changeRadio = (e) => {
    const { changeRadio } = this.props;
    this.setState({
      errorRadio: false,
    });
    changeRadio(e.target.value);
  }

  checkError = () => {
    const { sport, cricket, football } = this.props;
    this.setState({
      errorRadio: false,
    });
    if (sport === 'Cricket' && !cricket) {
      this.setState({
        errorRadio: true,
      });
      return;
    }
    if (sport === 'Football' && !football) {
      this.setState({
        errorRadio: true,
      });
    }
  }

  render() {
    const { sport } = this.props;
    const { errorRadio } = this.state;
    if (sport === 'Cricket') {
      return (
        <div className="RadioGroup">
          <h5>What you Do?</h5>
          <label htmlFor="wicket">
            <input type="radio" id="wicket" name="sport" value="Wicket Keeper" onChange={this.changeRadio} onBlur={this.checkError} />
            Wicket Keeper
          </label>
          <br />
          <label htmlFor="batsman">
            <input type="radio" id="batsman" name="sport" value="Batsman" onChange={this.changeRadio} onBlur={this.checkError} />
            Batsman
          </label>
          <br />
          <label htmlFor="bowler">
            <input type="radio" id="bowler" name="sport" value="Bowler" onChange={this.changeRadio} onBlur={this.checkError} />
            Bowler
          </label>
          <br />
          <label htmlFor="allRounder">
            <input type="radio" id="allRounder" name="sport" value="All Rounder" onChange={this.changeRadio} onBlur={this.checkError} />
            All Rounder
          </label>
          { errorRadio && <p style={{ color: 'red' }}>This Field is Required</p> }
        </div>
      );
    }
    if (sport === 'Football') {
      return (
        <div className="RadioGroup">
          <label htmlFor="defender">
            <input type="radio" id="defender" name="sport" value="Defender" onChange={this.changeRadio} onBlur={this.checkError} />
            Defender
          </label>
          <br />
          <label htmlFor="striker">
            <input type="radio" id="striker" name="sport" value="Striker" onChange={this.changeRadio} onBlur={this.checkError} />
            Striker
          </label>
          { errorRadio && <p style={{ color: 'red' }}>This Field is Required</p> }
        </div>
      );
    }
    return (
      <>
      </>
    );
  }
}

RadioGroup.propTypes = {
  changeRadio: PropTypes.func.isRequired,
  sport: PropTypes.string.isRequired,
  cricket: PropTypes.string.isRequired,
  football: PropTypes.string.isRequired,
};
