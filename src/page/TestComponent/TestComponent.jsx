import { Typography } from '@material-ui/core';
import { React, PureComponent } from 'react';
import { Math } from '../../component';

export default class TestComponent extends PureComponent {
  render() {
    return (
      <div className="TestComponent">
        <Math first="20" operator="*" second="23" />
        <Math first="20" operator="+" second="23" />
        <Math first="20" operator="-" second="23" />
        <Math first="20" operator="/" second="23" />
        <Math first="20" operator="*" second="Infinity" />
        <Math first="20" operator="/" second="Infinity" />
        <Math first="20" operator="/" second="0" />
        <Typography>
          <Math operator="*" second="23" />
        </Typography>
        <Math first="20" operator="*" />
      </div>
    );
  }
}
