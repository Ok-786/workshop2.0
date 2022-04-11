import SearchBar from 'material-ui-search-bar';
import React, { useState } from 'react'
import Featuredinfo from '../FeaturedInfo.js/Featuredinfo';
import ExpenseTable from '../ExpenseTable/ExpenseTable';
import SelectYear from '../YearSelectDropDown/SelectYear'
import ExpenseStyles from './ExpenseStyles';
import { Button } from '@material-ui/core';
import AddExpense from '../AddExpense/AddExpense';

export default function Expense() {
    const metaExpense = ['Expense', 'Pending', 'Approved'];
    const classes = ExpenseStyles();
    const [searched, setSearched] = useState("");
    const [rows, setRows] = useState([
        { name: 'Tyres', status: 200, description: 2 },
        { name: 'Stearing', status: 500, description: 5 },
    ]);
    const [data] = useState([
        { name: 'Danish', status: 'Pending', description: 'I am Sick, need 2 days off' },
        { name: 'Abdullah', status: 'Pending', description: 'i need off to get some personal stuff done' }
    ]);


    const requestSearch = (searchedVal) => {
        const filteredRows = data.filter((row) => {
            return row.name.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows);
    };

    const cancelSearch = () => {
        setSearched("");
        requestSearch(searched);
    };
    return (
        <div>
            <div style={{ width: '100%', display: 'flex' }}>
                <SelectYear />

                <SearchBar
                    value={searched}
                    onChange={(searchVal) => requestSearch(searchVal)}
                    onCancelSearch={() => cancelSearch()}
                    style={{ width: '130px', height: '55px', border: '1px solid lightgray', marginLeft: '15px' }}
                />
                <div className={classes.rightDiv}>
                    <AddExpense
                        component={<Button variant="contained" color="primary">
                            Add Expense
                        </Button>}
                    />

                </div>
            </div>
            <div className={classes.info}>
                <Featuredinfo metaData={metaExpense} />
            </div>
            <div>
                <ExpenseTable rows={rows} />
            </div>
            <div>

            </div>

        </div>
    )
}
