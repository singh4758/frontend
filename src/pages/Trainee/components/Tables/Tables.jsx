import { React, PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
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
                <StyledTableRow key={datas.name}>
                  <TableCell>{datas.name}</TableCell>
                  <TableCell>{datas.email}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
