import { React, PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { getRandomNumber, getRoundRobin } from './math';

export default class SliderField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  componentDidMount() {
    const { random } = this.props;
    const { duration } = this.props;
    setInterval(() => {
      const { index } = this.state;
      if (random) {
        this.setState({ index: getRandomNumber() });
      } else {
        this.setState({ index: getRoundRobin(index) });
      }
    }, duration);
  }

  render() {
    const {
      defaultAlt, defaultSrc, banners, height,
    } = this.props;

    const { index } = this.state;
    return (
      <img
        style={{ width: '90%' }}
        alt={defaultAlt}
        height={height}
        src={(banners && banners[index]) ? banners[index] : defaultSrc}
      />
    );
  }
}

SliderField.propTypes = {
  defaultAlt: PropTypes.string.isRequired,
  defaultSrc: PropTypes.string.isRequired,
  banners: PropTypes.arrayOf.isRequired,
  duration: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  random: PropTypes.bool.isRequired,
};
