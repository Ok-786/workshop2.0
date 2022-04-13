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


const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});


export default function Clients() {
    const [rows, setRows] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        async function callApi() {
            const response = await fetch('http://localhost:8000/api/auth/client/', {
                headers: { token: localStorage.token }
            });

            const parseRes = await response.json();
            console.log('hereeererererererer')
            console.log(parseRes)
            setRows(parseRes.client);
            setData(parseRes.client);

        }
        callApi();
    }, [])

    const [searched, setSearched] = useState("");
    const classes = useStyles();

    const requestSearch = (searchedVal) => {
        const filteredRows = data.filter((row) => {
            return row.firstName.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

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
                                    <img id={`img${row.firstName}`} src={`http://localhost:8000/${row.image}`} alt={`pic of ${row.image}`} style={{ width: 60, height:60 , borderRadius: '50%' }} />
                                </TableCell>
                                <TableCell align="left" style={{ color: '#80a4f1' }}>{row.firstName + " " + row.lastName}</TableCell>
                                <TableCell align="left" style={{ color: '#80a4f1' }}>{row.phoneNumber}</TableCell>
                                <TableCell align="left" style={{ color: '#80a4f1' }}>{row.idNumber}</TableCell>
                                <TableCell align="left" style={{ color: '#80a4f1' }}>{row.operationalArea}</TableCell>
                                <TableCell width={1} align="left" ><EditIcon style={{ color: '#00dff1' }} /></TableCell>
                                <TableCell align="left"><DeleteIcon style={{ color: 'red' }} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}