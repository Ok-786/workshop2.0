import React, { Fragment, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
import SearchBar from "material-ui-search-bar";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { Box, Button, FormControl, IconButton, Menu, MenuItem, Modal, Select } from "@material-ui/core";
// import AddEmployees from "../AddEmployees/AddEmployees";


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

const useStyles = makeStyles((theme) => ({
    // table: {
    //     minWidth: 650
    // },
    formControl: {
        // margin: theme.spacing(1),
        minWidth: 120,
        marginLeft: '10px',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


export default function ManageOrders() {
    const [current, setCurrent] = useState('');

    const ITEM_HEIGHT = 48;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open1 = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorEl(null);
    };




    const [rows1, setRows1] = useState([]);
    const [data1, setData1] = useState([]);
    const [rows, setRows] = useState([]);
    const [data, setData] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = (e) => {
        console.log(e)
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

    const [refresh, setRefresh] = useState(true);
    const [orders, setOrders] = useState(true);

    useEffect(() => {
        var parseRes = [];
        async function callApi() {
            const response = await fetch('http://localhost:8000/api/auth/client/', {
                headers: { token: localStorage.token }
            });

            parseRes = await response.json();
            console.log('qqqqqqqqqqqqqqqqqqqqq');
            console.log(parseRes.client[0].products[0].order);

            var arr = []
            for (var i in parseRes.client) {
                for (var j in parseRes.client[i].products) {
                    arr.push(parseRes.client[i].products[j].order)
                }
            }

            console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
            console.log(arr)




            setOrders(arr);
            setRows(parseRes.client);
            setData(parseRes.client);

        }
        refresh && callApi();



        refresh && setRefresh(false);
    }, [refresh])

    const updateHandler = async (e) => {
        e.preventDefault()

        // handleClose();
        try {
            const response1 = await fetch('http://localhost:8000/api/auth/client/update', {
                headers: {
                    'token': localStorage.token,
                    name: employee.name,
                    type: employee.type,
                    brand: employee.brand,
                    saleprice: employee.saleprice,
                    retailprice: employee.retailprice,
                    part_ID: employee.part_ID,
                    quantity: employee.quantity,
                    model: employee.model,
                    modelYear: employee.modelYear,
                    make: employee.make,
                    description: employee.description,
                    id: employee._id
                },
                method: 'PATCH'
            });
            console.log(response1)
        } catch (err) {
            console.log(err)
        }


        console.log('enddd')
        var response;
        async function callApi() {
            const response = await fetch('http://localhost:8000/api/auth/client/', {
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            console.log(parseRes.client);
            setRows(parseRes.client);
            setData(parseRes.client);

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

    const deleteHandler = async (id) => {
        console.log(id)
        try {
            console.log('dsfsfsfsf')
            const response = await fetch('http://localhost:8000/api/auth/products/delete', {
                headers: {
                    'token': localStorage.token,
                    'id': id
                },
                method: 'DELETE'

            });
            console.log(response)
        } catch (err) {
            console.log(err);
        }

        async function callApi() {
            const response = await fetch('http://localhost:8000/api/auth/products/', {
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            console.log(parseRes.products);
            setRows(parseRes.products);
            setData(parseRes.products);

        }

        callApi();
    }

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };

    const [type, setType] = useState('');
    const [state, setState] = React.useState('All');

    const handleChange1 = (event) => {
        setState(
            event.target.value
        );
    };

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <SearchBar
                    style={{ width: '15%', borderRadius: '15px', height: '37px', border: '1px solid lightgray' }}
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                />
                <FormControl variant="outlined" className={classes.formControl}>
                    {/* <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel> */}
                    <Select
                        // labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={state}
                        onChange={handleChange1}
                        name="Year"
                        style={{ height: '37px', border: '1px solid lightgray' }}

                        defaultValue={'All'}
                    >
                        <MenuItem value={'pending'}>Pending</MenuItem>
                        <MenuItem value={'dilivered'}>Delivered</MenuItem>
                        <MenuItem value={'dispached'}>Dispached</MenuItem>
                        <MenuItem value={'All'}>All</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <TableContainer style={{ border: '0px solid', marginTop: '30px', borderBottom: "none" }}>
                <Table className={classes.table} aria-label="simple table" style={{ width: '100%', border: 'none', borderBottom: "none" }} >
                    <TableHead style={{ background: '#fafafa', border: '0px ', borderBottom: "none" }}>
                        <TableRow style={{ borderBottom: "none" }}>
                            {/* <TableCell width={'2%'}><b>Id</b></TableCell> */}
                            <TableCell align="left" ><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Client </b></TableCell>
                            <TableCell align="left" ><b>Order Id</b></TableCell>
                            <TableCell align="left" ><b>Order Status</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <Fragment>
                                {row.products.map((r, index1) => {
                                    return (
                                        <Fragment>

                                            {(state === 'All') &&
                                                <TableRow key={row.firstName} style={{ color: '#80a4f1' }}>
                                                    <TableCell align="left" style={{ borderBottom: "none" }}>
                                                        <div >
                                                            <img id={`img${row.image}`} src={`http://localhost:8000/${row.image}`} alt={`${row.name}`} style={{ width: 50, height: 50, borderRadius: '50%' }} />
                                                            <div style={{ color: 'darkgray' }}>{row.firstName + ' ' + row.lastName}</div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell align="left" style={{ borderBottom: "none" }}>{r.order}</TableCell>
                                                    <TableCell align="left" style={{ borderBottom: "none" }}>
                                                        {/* {r.status} */}
                                                        {((r.status === "dispached") || (r.status === "dispatched")) && <Button variant='outlined' size='small' style={{ width: '10vh', fontSize: '9px' }} color='primary'>{r.status}</Button>}
                                                        {r.status === "pending" && <Button variant='outlined' size='small' style={{ color: 'orange', border: '1px solid orange', width: '10vh', fontSize: '9px' }}>{r.status}</Button>}
                                                        {((r.status === "delivered") || (r.status === 'dilivered')) && <Button variant='outlined' size='small' style={{ color: 'green', width: '10vh', border: '1px solid green', fontSize: '9px' }}>{r.status}</Button>}

                                                    </TableCell>


                                                </TableRow>
                                            }
                                            {(state === r.status) &&
                                                <TableRow key={row.firstName} style={{ color: '#80a4f1' }}>
                                                    <TableCell align="left" style={{ borderBottom: "none" }}>
                                                        <div >
                                                            <img id={`img${row.image}`} src={`http://localhost:8000/${row.image}`} alt={`${row.name}`} style={{ width: 50, height: 50, borderRadius: '50%' }} />
                                                            <div style={{ color: 'darkgray' }}>{row.firstName + ' ' + row.lastName}</div>
                                                        </div>
                                                    </TableCell>
                                                    <TableCell align="left" style={{ borderBottom: "none" }}>{r.order}</TableCell>
                                                    <TableCell align="left" style={{ borderBottom: "none" }}>
                                                        {/* {r.status} */}
                                                        {((r.status === "dispached") || (r.status === "dispatched")) && <Button variant='outlined' size='small' style={{ width: '10vh', fontSize: '9px' }} color='primary'>{r.status}</Button>}
                                                        {r.status === "pending" && <Button variant='outlined' size='small' style={{ color: 'orange', border: '1px solid orange', width: '10vh', fontSize: '9px' }}>{r.status}</Button>}
                                                        {((r.status === "delivered") || (r.status === 'dilivered')) && <Button variant='outlined' size='small' style={{ color: 'green', width: '10vh', border: '1px solid green', fontSize: '9px' }}>{r.status}</Button>}

                                                    </TableCell>


                                                </TableRow>
                                            }

                                        </Fragment>
                                    )
                                })}
                            </Fragment>
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

                        {(type === "Edit") ?
                            <div class="testbox">
                                <form className="formUpdate" onSubmit={updateHandler}>
                                    <div class="banner">
                                        <h1 style={{ color: '#ffff' }}>Update Product Details</h1>
                                    </div>
                                    <br />
                                    <fieldset>
                                        <legend>Product Details</legend>
                                        <div class="colums">
                                            <div class="item">
                                                <label for="name">Product Name<span>*</span></label>
                                                <input id="name" type="text" name="name" value={employee.name} onChange={handleChange} />
                                            </div>
                                            <div class="item">
                                                <label for="type"> Type<span>*</span></label>
                                                <input id="type" type="text" name="type" value={employee.type} onChange={handleChange} />
                                            </div>
                                            <div class="item">
                                                <label for="brand">Brand<span>*</span></label>
                                                <input id="brand" type="text" name="brand" value={employee.brand} onChange={handleChange} />
                                            </div>
                                            <div class="item">
                                                <label for="saleprice">Sale Price</label>
                                                <input id="saleprice" type="number" name="saleprice" value={employee.saleprice} onChange={handleChange} />
                                            </div>
                                            <div class="item">
                                                <label for="retailprice">Retail Price</label>
                                                <input id="retailprice" type="text" name="retailprice" value={employee.retailprice} onChange={handleChange} />
                                            </div>
                                            <div class="item">
                                                <label for="part_ID">Part Id</label>
                                                <input id="part_ID" type="text" name="part_ID" value={employee.part_ID} onChange={handleChange} />
                                            </div>
                                            <div class="item">
                                                <label for="quantity">Quantity</label>
                                                <input id="quantity" type="text" name="quantity" value={employee.quantity} onChange={handleChange} />
                                            </div>
                                            <div class="item">
                                                <label for="model">Model</label>
                                                <input id="model" type="text" name="model" value={employee.model} onChange={handleChange} />
                                            </div>
                                            <div class="item">
                                                <label for="make">Make</label>
                                                <input id="make" type="text" name="make" value={employee.make} onChange={handleChange} />
                                            </div>
                                            <div class="item">
                                                <label for="description">Details</label>
                                                <input id="description" type="text" name="description" value={employee.description} onChange={handleChange} />
                                            </div>
                                        </div>
                                    </fieldset>

                                    <div class="btn-block">
                                        <button type="submit" className="buttonC" onClick={(e) => { handleClose(); updateHandler(e); }}>Confirm Changes</button>
                                    </div>
                                </form>
                            </div>
                            :
                            <div style={{ background: 'white', borderRadius: '6px', paddingInline: '40px' }}>
                                {/* <AddEmployees handleClose={handleClose} setRefresh={setRefresh}/> */}
                            </div>
                        }
                    </Box>
                </Modal>
            </div>
        </div>
    );
}