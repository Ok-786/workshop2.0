import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import { Button } from '@material-ui/core';
import TimeOffTableStyles from './TimeOffTableStyles';
import Image from '../../../Images/logo.png';
import ProgressBar from '../Progressbar/ProgressBar';
import EditTimeOff from '../EditTimeOff/EditTimeOff';

// import { useHistory } from 'react-router-dom';

export default function TimeOffTable(props) {
    const classes = TimeOffTableStyles();
    
    // var history = useHistory();

    return (
        <div className={classes.widgetlg}>
            <TableContainer component={Paper} style={{ border: '0px solid', marginTop: '100px', borderBottom: "none" }} >
                <Table className={classes.table} aria-label="simple table" style={{ width: '100%', border: 'none', borderBottom: "none" }} >
                    <TableHead style={{ background: '#fafafa', border: '0px ', borderBottom: "none" }}>
                        <TableRow style={{ borderBottom: "none" }}>

                            <TableCell width="1%" align="right"></TableCell>
                            <TableCell width="10%" align="Left" ><b>Name</b></TableCell>
                            <TableCell width="20%" align="left"><b>Description</b></TableCell>
                            <TableCell width="10%" align="left"><b>Off Time Completed</b></TableCell>
                            <TableCell width="10%" align="center"><b>Manage</b></TableCell>
                            {/* <TableCell width="10%" align="right"></TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody style={{ borderBottom: "none" }}>
                        {props.rows.map((row, index) => (
                            <TableRow key={row.id} id={row.id} style={{ borderBottom: "none" }}>
                                <TableCell style={{ borderBottom: "none" }} component="th" width="1%" align="left" scope="row">
                                    {/* <img id={`img${row.firstName}`} src={`http://localhost:8000/${row.image}`} alt={`pic of ${row.firstName}`} style={{ width: 60 }} /> */}
                                    <img id={`img${row.name}`} src={Image} alt={`pic of ${row.name}`} style={{ width: 60, borderRadius: "50%" }} />
                                </TableCell>
                                {/* <TableCell width="10%" style={{ color: 'blue' }} component="th" scope="row" id={`id${row.id}`}>{index}</TableCell> */}
                                <TableCell width="10%" style={{ borderBottom: "none" }} align="left" id={`fn${row.id}`}>{row.name}</TableCell>
                                <TableCell width="10%" style={{ borderBottom: "none" }} align="left" id={`fn${row.id}`}>{row.description}</TableCell>
                                {/* <TableCell width="1%" style={{ borderBottom: "none", color: 'blue', }} align="left" id={`fn${row.id}`}>{row.status}</TableCell> */}
                                <TableCell width="10%" style={{ borderBottom: "none" }} align="left" id={`fn${row.id}`}><ProgressBar /></TableCell>
                                {/* <TableCell width="1%" align="right" ><img id={`img${row.id}`} src={row.imageURL} alt={`profile pic of ${row.firstName}`} style={{ width: 60 }} /></TableCell> */}
                                <TableCell align="right" width="10%" style={{ borderBottom: "none" }}>
                                    <div style={{ display: 'flex', paddingLeft:'30%' }}>
                                        <IconButton onClick={() => props.editTask(index)} style={{ color: '#3f51b5' }}><EditTimeOff component={<EditIcon/>} data={row} /></IconButton>
                                        <IconButton onClick={() => props.deleteTask(index)} style={{ color: 'red' }}><Delete /></IconButton>
                                    </div>
                                </TableCell>
                                {/* <TableCell><IconButton onClick={()=>props.editTask(index)}><Edit/></IconButton></TableCell> */}
                            </TableRow >
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>
            {/* <Button className={classes.delButton} onClick={function (event) { props.deleteBtn(); history.push("/Signin") }} >Delete All</Button> */}
        </div>
    )
}
