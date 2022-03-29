import { useEffect } from 'react';
import axios from 'axios';
import logo from '../../../logo.svg';
import './data.scss';
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Paper } from '@mui/material';
import Header from '../../components/header/header';
import { styled } from '@mui/material/styles';



const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.secondary.light,
      // backgroundColor:{main},
      color: theme.palette.common.white,
      innerWidth: 10,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
      innerWidth: 10,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

function MyData() {
  const [details, setDetails] = useState<Array<any>>([{ courseid: 0, coursaname: "", userid: 0, username: "" }]);
  const [myCourses, setMyCourses] = useState([]);
  

  

  useEffect(() => {
    //fetch courses using mongo
    fetch('/courses/get-all-my-courses')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMyCourses(data.courses);
      }).catch(err => {
        console.error(err);
      })
  }, [])

  return (

    <div className='dataDiv'>
      <Header />
   
      <h4>my courses</h4>
      <div className="popup">

<TableContainer className="table" component={Paper}>
  <Table sx={{ Width: 300 }} aria-label="customized table">
    <TableHead>
      <TableRow>

        <StyledTableCell align="center">name</StyledTableCell>
        <StyledTableCell align="center"> participants</StyledTableCell>
        <StyledTableCell align="center"> lessons </StyledTableCell>
        <StyledTableCell align="center"> hours </StyledTableCell>
        <StyledTableCell align="center"> cost </StyledTableCell>
        <StyledTableCell align="center"> time </StyledTableCell>
        <StyledTableCell align="center"> available spaces </StyledTableCell>

      </TableRow>
    </TableHead>
    <TableBody>
      {myCourses.map((row: any, index: any) => (
        <StyledTableRow key={index}>

          <StyledTableCell align="center">{row.name}</StyledTableCell>
          <StyledTableCell align="center">{row.participants}</StyledTableCell>
          <StyledTableCell align="center">{row.lessons}</StyledTableCell>
          <StyledTableCell align="center">{row.hours}</StyledTableCell>
          <StyledTableCell align="center">{row.cost}</StyledTableCell>
          <StyledTableCell align="center">{row.time}</StyledTableCell>
          <StyledTableCell align="center">{row.availableSpaces}</StyledTableCell>
        


        </StyledTableRow>


      ))}
    </TableBody>
  </Table>
</TableContainer>



</div>


    </div>

  );
}

export default MyData;
