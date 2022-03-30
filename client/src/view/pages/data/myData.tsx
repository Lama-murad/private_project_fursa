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
import { useAppDispatch ,useAppSelector} from '../../../app/hooks';
import { fetchUser, userInfo } from '../../../features/userReducer';



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
  const [myGCourses, setMyGCourses] = useState([]);
  const [mySCourses, setMySCourses] = useState([]);
  const dispatch = useAppDispatch()
  const user = useAppSelector(userInfo)
  const emaill = user.email;
  const emailll="lama@gmail.com";
  

  

  useEffect(() => {
    //fetch courses using mongo

     axios.post('/courses/get-all-my-Gcourses', { email:emailll})
    .then(data => {
      console.log(data, "dataaaa");
      setMyGCourses(data.data.courses);
      // console.log(horsesByLvl);
    }).catch(err => {
      console.error(err);
    })

     axios.post('/courses/get-all-my-Scourses', { email:emailll})
    .then(data => {
      console.log(data, "dataaaa");
      setMySCourses(data.data.courses);
      // console.log(horsesByLvl);
    }).catch(err => {
      console.error(err);
    })

  }, [])

  return (

    <div className='dataDiv'>
      <Header />
   
      <h4>group lessons</h4>
      <div className="popup">

<TableContainer className="table" component={Paper}>
  <Table sx={{ Width: 300 }} aria-label="customized table">
    <TableHead>
      <TableRow>

        <StyledTableCell align="center">name</StyledTableCell>
        <StyledTableCell align="center"> age</StyledTableCell>
        <StyledTableCell align="center"> level </StyledTableCell>
        <StyledTableCell align="center"> course </StyledTableCell>
      

      </TableRow>
    </TableHead>
    <TableBody>
      {myGCourses.map((row: any, index: any) => (
        <StyledTableRow key={index}>
      <StyledTableCell align="center">{row.name}</StyledTableCell>
          <StyledTableCell align="center">{row.age}</StyledTableCell>
          <StyledTableCell align="center">{row.level}</StyledTableCell>
          <StyledTableCell align="center">{row.course}</StyledTableCell>

        </StyledTableRow>


      ))}
    </TableBody>
  </Table>
</TableContainer>
</div>
<h4>signle lessons</h4>
<div className="popup">

<TableContainer className="table" component={Paper}>
  <Table sx={{ Width: 300 }} aria-label="customized table">
    <TableHead>
      <TableRow>
      <StyledTableCell align="center"> level </StyledTableCell>
        <StyledTableCell align="center">name</StyledTableCell>
        <StyledTableCell align="center"> age</StyledTableCell>
     
        <StyledTableCell align="center"> date </StyledTableCell>
      

      </TableRow>
    </TableHead>
    <TableBody>
      {myGCourses.map((row: any, index: any) => (
        <StyledTableRow key={index}>
             <StyledTableCell align="center">{row.level}</StyledTableCell>
      <StyledTableCell align="center">{row.name}</StyledTableCell>
          <StyledTableCell align="center">{row.age}</StyledTableCell>
       
          <StyledTableCell align="center">{row.date}</StyledTableCell>

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
