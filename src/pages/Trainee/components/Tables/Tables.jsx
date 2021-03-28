import { React, PureComponent } from 'react';
import {
  Table,
  TableHead,
  //   Tablebody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  TableBody,
} from '@material-ui/core';
import data from '../../data';

export default class Tables extends PureComponent {
  render() {
    return (
      <div style={{ margin: '10px 0px' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: 'bolder' }}>Name</TableCell>
                <TableCell style={{ fontWeight: 'bolder' }}>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((datas) => (
                <TableRow key={datas.name}>
                  <TableCell>{datas.name}</TableCell>
                  <TableCell>{datas.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}
