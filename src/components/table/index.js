import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#3f51b5",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));

export default function CustomizedTables(props) {
  const classes = useStyles();

  const rows = props.rows 
  const columns = props.columns
  
  const editar = () => {
    console.log("editando");
  }

  const deletar = () => {
    console.log("deletando");
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map(c => (
              <StyledTableCell key={c.name} align={c.align}>{c.name}</StyledTableCell>
            ))}   
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
               {Object.values(row).map((values, index) => (  
                <StyledTableCell align="center" key={index}>{values}</StyledTableCell>
              ))}

              <StyledTableCell align="center">
              <Button
                variant="text"
                color="primary"
                size="small"
                startIcon={<EditIcon />}
                onClick ={() => {editar()}}
              >
              </Button>
              <Button
                variant="text"
                color="secondary"
                size="small"
                startIcon={<DeleteIcon />}
                onClick ={() => {deletar()}}
              >
              </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}