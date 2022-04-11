import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@material-ui/core'
import React from 'react'
import DatePicker from '../DatePicker/DatePicker'

export default function Personal() {
    const [age, setAge] = React.useState('Male');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div style={{ margin: '5%' }}>
            <h4>General Information</h4>
            <div style={{ marginInlineStart: '20%' }}>
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <TextField
                        id="standard-full-width"
                        label="First Name"
                        style={{ margin: 12, }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Last Name"
                        style={{ margin: 12, }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <DatePicker name='Age' />
                    <FormControl
                        style={{ minWidth: 200, margin: 12 }} >
                        <InputLabel ma>Gender</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            margin="normal"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>None</MenuItem>
                            <MenuItem value={20}>Male</MenuItem>
                            <MenuItem value={30}>Female</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <TextField
                        type='number'
                        id="standard-full-width"
                        label="Phone Number"
                        style={{ margin: 12 }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Email"
                        style={{ margin: 12, }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </div>
            </div>
            <h4>Address</h4>
            <div style={{ marginInlineStart: '20%' }}>
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <TextField
                        id="standard-full-width"
                        label="Country"
                        style={{ margin: 12, }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="City"
                        style={{ margin: 12, }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <TextField
                        id="standard-full-width"
                        label="Colony"
                        style={{ margin: 12 }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Street"
                        style={{ margin: 12, }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </div>
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <TextField
                        id="standard-full-width"
                        label="Society"
                        style={{ margin: 12 }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="House Number"
                        style={{ margin: 12, }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </div>
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <TextField
                        id="standard-full-width"
                        label="State"
                        style={{ margin: 12 }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="standard-full-width"
                        label="Zip"
                        style={{ margin: 12, }}
                        // placeholder="enter first name"
                        // helperText=""
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div style={{ justifyContent: 'center',  }}>
                    <Button style={{ marginTop: '50px', marginLeft:'10px' }} variant='contained' color='primary'>Save</Button>
                </div>
            </div>
        </div>
    )
}
