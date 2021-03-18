import { React, PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class RadioGroup extends PureComponent {
  changeRadio = (e) => {
    const { changeRadio } = this.props;
    changeRadio(e.target.value);
  }

  render() {
    const { sport } = this.props;
    if (sport === 'Cricket') {
      return (
        <div className="RadioGroup">
          <h5>What you Do?</h5>
          <label htmlFor="wicket">
            <input type="radio" id="wicket" name="sport" value="Wicket Keeper" onChange={this.changeRadio} />
            Wicket Keeper
          </label>
          <br />
          <label htmlFor="batsman">
            <input type="radio" id="batsman" name="sport" value="Batsman" onChange={this.changeRadio} />
            Batsman
          </label>
          <br />
          <label htmlFor="bowler">
            <input type="radio" id="bowler" name="sport" value="Bowler" onChange={this.changeRadio} />
            Bowler
          </label>
          <br />
          <label htmlFor="allRounder">
            <input type="radio" id="allRounder" name="sport" value="All Rounder" onChange={this.changeRadio} />
            All Rounder
          </label>
        </div>
      );
    }
    if (sport === 'Football') {
      return (
        <div className="RadioGroup">
          <label htmlFor="defender">
            <input type="radio" id="defender" name="sport" value="Defender" onChange={this.changeRadio} />
            Defender
          </label>
          <br />
          <label htmlFor="striker">
            <input type="radio" id="striker" name="sport" value="Striker" onChange={this.changeRadio} />
            Striker
          </label>
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
};
