
import { Button, FormControl, Grid, makeStyles, MenuItem, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react'
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Bar, Legend, BarChart } from 'recharts';

// const data = [
//     { name: 'April', uv: 400, pv: 2400, amt: 2400 },
//     { name: 'May', uv: 500, pv: 1400, amt: 3400 },
//     { name: 'June', uv: 100, pv: 2400, amt: 2300 },
//     { name: 'July', uv: 700, pv: 2400, amt: 2460 },
//     { name: 'Aug', uv: 700, pv: 2400, amt: 2460 },
//     { name: 'Sep', uv: 700, pv: 2100, amt: 2460 },
//     { name: 'Oct', uv: 900, pv: 2400, amt: 2460 },
// ];

const RenderLineChart = (props) => {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function callApi() {
            const response = await fetch('http://localhost:8000/api/auth/staff/', {
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            console.log('sssssssssssssssssssssssssss')
            console.log(parseRes.staff)


            var c = 0;
            var p = 0;
            var ip = 0;

            for (var i in parseRes.staff) {
                console.log(parseRes.staff[i].task[0])
                for (var k in parseRes.staff[i].task) {
                    console.log(parseRes.staff[i].task[k].status)
                    if (parseRes.staff[i].task[k].status) {
                        if (parseRes.staff[i].task[k].status === "pending") { p = +1 };
                        if (parseRes.staff[i].task[k].status === "completed") { c = +1 };
                        if (parseRes.staff[i].task[k].status === "in progress") { ip = +1 };
                    }
                }
            }
            console.log(c, p, ip)
            var obj
            if (props.state === 'all') {
                obj = [
                    {
                        name: "pending",
                        uv: p
                    },
                    {
                        name: "completed",
                        pv: c
                    },
                    {
                        name: "in progress",
                        lv: ip
                    },
                ]
            }
            if (props.state === 'pending') {
                obj = [
                    {
                        name: "pending",
                        uv: p
                    },
                ]
            }
            if (props.state === 'completed') {
                obj = [
                    {
                        name: "completed",
                        pv: c
                    },
                ]
            }
            if (props.state === 'in progress') {
                obj = [
                    {
                        name: "in progress",
                        lv: ip
                    },
                ]
            }
            props.state && setRows(obj);
            // setData(parseRes.staff);

        }

        callApi();
    }, [props.state])
    return (
        <div style={{ width: '100%' }}>
            <ResponsiveContainer width="95%" height={200}>
                <BarChart  height={250} data={rows} >
                    {/* <CartesianGrid strokeDasharray="1 1" /> */}
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#3f51b5"  style={{ opacity: '1', justifyContent:'center', alignItems:'center', textAlign:'center' }} />
                    <Bar dataKey="uv" fill="orange" />
                    <Bar dataKey="lv" fill="green" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}


export default function Reports() {

    const [state, setState] = React.useState('all');
    const handleChange = (event) => {
        setState(
            event.target.value
        );
    };
    // const [state1, setState1] = React.useState('Task1');
    // const handleChange1 = (event) => {
    //     setState1(
    //         event.target.value
    //     );
    // };

    // const [task, setTask] = useState(
    //     [{

    //     },

    //     {

    //     }]
    // )

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


    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function callApi() {
            const response = await fetch('http://localhost:8000/api/auth/staff/', {
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            console.log('sssssssssssssssssssssssssss')
            console.log(parseRes.staff)
            setRows(parseRes.staff);
            // setData(parseRes.staff);

        }

        callApi();
    }, [])

    const classes = useStyles();

    return (
        <div>
            <hr style={{ opacity: '.2', marginTop: '20px' }}></hr>
            <Grid container >
                <Grid item align='right' xs={1}>
                    <Typography style={{ marginTop: '4px' }}>Filter By:&nbsp;</Typography>
                </Grid>
                <Grid item xs={1}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        {/* <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel> */}
                        <Select
                            // labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={state}
                            onChange={handleChange}
                            name="Type"
                            style={{ height: '37px', border: '1px solid lightgray' }}

                            defaultValue={'completed'}
                        >
                            <MenuItem value={'completed'}>Completed</MenuItem>
                            <MenuItem value={'pending'}>Pending</MenuItem>
                            <MenuItem value={'in progress'}>In Progress</MenuItem>
                            <MenuItem value={'all'}>All</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={1}>

                </Grid>
            </Grid>
            <hr style={{ opacity: '.2', marginBottom: '40px' }}></hr>
            <Grid container>
                <Grid item xs={12} >
                    <RenderLineChart state={state} />
                </Grid>
                <Grid item xs={12} style={{ marginTop: '40px' }}>
                    <TableContainer style={{ border: '0px solid', marginTop: '30px', height: '29vh', borderBottom: "none" }}>
                        <Table className={classes.table} aria-label="simple table" style={{ width: '100%', border: 'none', borderBottom: "none" }} >
                            <TableHead style={{ background: '#fafafa', border: '0px ', borderBottom: "none" }}>
                                <TableRow style={{ borderBottom: "none" }}>
                                    <TableCell align="left" ><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name</b></TableCell>
                                    <TableCell align="left" ><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Task</b></TableCell>
                                    <TableCell align="left" ><b>Task No</b></TableCell>
                                    <TableCell align="center" ><b>Status</b></TableCell>
                                    <TableCell align="center" ><b>Due Date</b></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((r, index) => (
                                    <Fragment>
                                        {r.task.map((row, index2) => (
                                            <Fragment>
                                                {row.name &&
                                                    <TableRow key={r.firstName + r.lastName} style={{ color: '#80a4f1' }}>
                                                        <TableCell align="left" style={{ borderBottom: "none" }}>{r.firstName + " " + r.lastName}</TableCell>
                                                        <TableCell align="left" style={{ borderBottom: "none" }}>{row.name}</TableCell>
                                                        <TableCell align="left" style={{ borderBottom: "none" }}>
                                                            <div style={{ color: 'darkgray' }}>&nbsp;&nbsp;&nbsp;&nbsp;{index}{index2}</div>
                                                        </TableCell>
                                                        <TableCell align="center" style={{ borderBottom: "none" }}>
                                                            {row.status === "completed" && <Button variant='outlined' size='small' style={{ width: '10vh', fontSize: '9px' }} color='primary'>{row.status}</Button>}
                                                            {row.status === "pending" && <Button variant='outlined' size='small' style={{ color: 'orange', border: '1px solid orange', width: '10vh', fontSize: '9px' }}>{row.status}</Button>}
                                                            {row.status === "in progress" && <Button variant='outlined' size='small' style={{ color: 'green', width: '10vh', border: '1px solid green', fontSize: '9px' }}>{row.status}</Button>}
                                                        </TableCell>
                                                        <TableCell align="center" style={{ borderBottom: "none" }}>{row.dueDate && row.dueDate.split('T')[0]}</TableCell>

                                                    </TableRow>
                                                }
                                            </Fragment>
                                        ))}
                                    </Fragment>
                                ))}

                            </TableBody>
                        </Table>
                    </TableContainer>

                </Grid>
            </Grid>
        </div>
    )
}
