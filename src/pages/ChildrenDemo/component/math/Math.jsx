/* eslint-disable no-eval */
import { React, PureComponent } from 'react';
import { PropTypes } from 'prop-types';

export default class Math extends PureComponent {
  render() {
    const { first, second, operator } = this.props;
    return (
      <div className="Math">
        { first && second && ['+', '-', '*', '/'].indexOf(operator) !== -1 && (
          <>
            <span>{first + operator + second }</span>
            <span> = </span>
            <span>{eval(first + operator + second)}</span>
          </>
        )}
        { (!first || !second || ['+', '-', '*', '/'].indexOf(operator) === -1) && (
          <>
            <span>{first + operator + second }</span>
            <span> = </span>
            <span>Invalid</span>
          </>
        )}
      </div>
    );
  }
}

Math.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  operator: PropTypes.string.isRequired,
};
