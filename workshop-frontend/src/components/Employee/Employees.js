import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { Box, IconButton, Modal } from "@material-ui/core";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});


export default function Employees() {
    const [rows, setRows] = useState([]);
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        setEmployee(e);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        operationalArea: '',
        phoneNumber: '',
        idNumber: '',
        education: '',
        country: '',
        state: '',
        experience: '',
        skills: '',
        additionalDetails: '',
        creator: '',
        image: '',
        longitude: '',
        latitude: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    useEffect(() => {
        async function callApi() {
            const response = await fetch('http://localhost:8000/api/auth/staff/', {
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            console.log(parseRes.staff)
            setRows(parseRes.staff);
            setData(parseRes.staff);

        }
        callApi();
    }, [])

    const updateHandler = async (e) => {
        e.preventDefault()

        // handleClose();
        try {
            const response1 = await fetch('http://localhost:8000/api/auth/staff/update', {
                headers: {
                    'token': localStorage.token,
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    email: employee.email,
                    address: employee.address,
                    operationalArea: employee.operationalArea,
                    phoneNumber: employee.phoneNumber,
                    idNumber: employee.idNumber,
                    education: employee.education,
                    country: employee.country,
                    state: employee.state,
                    experience: employee.experience,
                    skills: employee.skills,
                    additionalDetails: employee.additionalDetails,
                    creator: employee.creator,
                    image: employee.image,
                    longitude: employee.longitude,
                    latitude: employee.latitude,
                    id: employee.id
                },
                method: 'PATCH'
            });

        } catch (err) {
            console.log(err)
        }


        console.log('enddd')
        var response;
        async function callApi() {
             response = await fetch('http://localhost:8000/api/auth/staff/', {
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            console.log(parseRes.staff)
            setRows(parseRes.staff);
            setData(parseRes.staff);

        }
        callApi();

        const parseRes = await response.json();
        console.log(parseRes.staff)
        setRows(parseRes.staff);
        setData(parseRes.staff);

        // console.log(employee)
    }

    const [searched, setSearched] = useState("");
    const classes = useStyles();

    const requestSearch = (searchedVal) => {
        const filteredRows = data.filter((row) => {
            return row.firstName.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const deleteHandler = async (email) => {
        var parseRes;
        try {
            console.log('dsfsfsfsf')
            const response = await fetch('http://localhost:8000/api/auth/staff/delete', {
                headers: {
                    'token': localStorage.token,
                    'email': email
                },
                method: 'DELETE'

            });
        } catch (err) {
            console.log(err);
        }

        async function callApi() {
            const response = await fetch('http://localhost:8000/api/auth/staff/', {
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            console.log(parseRes.staff)
            setRows(parseRes.staff);
            setData(parseRes.staff);

        }
        callApi();
    }

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    return (
        <Paper>
            <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
            />
            <TableContainer>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow >
                            <TableCell style={{ color: 'blue' }}>Users</TableCell>
                            <TableCell align="left" >Name</TableCell>
                            <TableCell align="left" >Mobile Number</TableCell>
                            <TableCell align="left" >CNIC</TableCell>
                            <TableCell align="left" >Area</TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="left"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.firstName} style={{ color: '#80a4f1' }}>
                                <TableCell component="th" scope="row">
                                    <img id={`img${row.firstName}`} src={`http://localhost:8000/${row.image}`} alt={`pic of ${row.image}`} style={{ width: 60, height: 60, borderRadius: '50%' }} />
                                </TableCell>
                                <TableCell align="left" style={{ color: '#80a4f1' }}>{row.firstName + " " + row.lastName}</TableCell>
                                <TableCell align="left" style={{ color: '#80a4f1' }}>{row.phoneNumberNumber}</TableCell>
                                <TableCell align="left" style={{ color: '#80a4f1' }}>{row.idNumber}</TableCell>
                                <TableCell align="left" style={{ color: '#80a4f1' }}>{row.operationalArea}</TableCell>
                                <TableCell width={1} align="left" style={{ cursor: 'pointer' }} onClick={() => handleOpen(row)}><IconButton ><EditIcon style={{ color: '#00dff1' }} /></IconButton></TableCell>
                                <TableCell align="left"><IconButton><DeleteIcon onClick={() => deleteHandler(row.email)} style={{ color: 'red', cursor: 'pointer' }} /></IconButton></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-additionalDetails"
                >
                    <Box sx={style}>


                        <div class="testbox">
                            <form className="formUpdate" onSubmit={updateHandler}>
                                <div class="banner">
                                    <h1 style={{ color: '#ffff' }}>Update Employee Details</h1>
                                </div>
                                <br />
                                <fieldset>
                                    <legend>Personale Details</legend>
                                    <div class="colums">
                                        <div class="item">
                                            <label for="firstName">First Name<span>*</span></label>
                                            <input id="firstName" type="text" name="firstName" value={employee.firstName} onChange={handleChange} />
                                        </div>
                                        <div class="item">
                                            <label for="lastName"> Last Name<span>*</span></label>
                                            <input id="lastName" type="text" name="lastName" value={employee.lastName} onChange={handleChange} />
                                        </div>
                                        <div class="item">
                                            <label for="address">Email Address<span>*</span></label>
                                            <input id="address" type="text" name="address" value={employee.email} onChange={handleChange} />
                                        </div>
                                        <div class="item">
                                            <label for="phoneNumber">phone Number</label>
                                            <input id="phoneNumber" type="tel" name="phoneNumber" value={employee.phoneNumber} onChange={handleChange} />
                                        </div>
                                        <div class="item">
                                            <label for="address">House Address</label>
                                            <input id="address" type="text" name="address" value={employee.address} onChange={handleChange} />
                                        </div>
                                        <div class="item">
                                            <label for="state">state</label>
                                            <input id="state" type="text" name="state" value={employee.state} onChange={handleChange} />
                                        </div>
                                        <div class="item">
                                            <label for="idNumber">CNIC</label>
                                            <input id="idNumber" type="text" name="idNumber" value={employee.state} onChange={handleChange} />
                                        </div>
                                        <div class="item">
                                            <label for="country">Country</label>
                                            <input id="country" type="text" name="text" value={employee.country} onChange={handleChange} />
                                        </div>
                                    </div>
                                </fieldset>
                                <br />
                                <fieldset>
                                    <legend>Other Details</legend>
                                    <div class="colums">
                                    </div>

                                    <div class="item">
                                        <label for="experience">Experience<span>*</span></label>
                                        <input id="experience" type="text" name="experience" value={employee.experience} onChange={handleChange} />
                                    </div>
                                    <div class="item">
                                        <label for="skills">Skills</label>
                                        <input id="skills" type="text" name="skills" value={employee.skills} onChange={handleChange} />
                                    </div>
                                    <div class="item">
                                        <label for="additionalDetails">additionalDetails</label>
                                        <textarea id="additionalDetails" name="additionalDetails" rows="3" value={employee.additionalDetails} onChange={handleChange}></textarea>
                                    </div>
                                </fieldset>
                                <div class="btn-block">
                                    <button type="submit" className="buttonC" onClick={(e) => { handleClose(); updateHandler(e); }}>Confirm Changes</button>
                                </div>
                            </form>
                        </div>
                    </Box>
                </Modal>
            </div>
        </Paper>
    );
}