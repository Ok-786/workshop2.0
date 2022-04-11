import { Button, TextField } from '@material-ui/core'
import React from 'react'

export default function Work() {

    return (
        <div style={{ margin: '5%' }}>
            <h4>Workshop Information</h4>
            <div style={{ marginInlineStart: '20%' }}>
                <div style={{ justifyContent: 'space-between', display: 'flex' }}>
                    <TextField
                        id="standard-full-width"
                        label="Workshop Name"
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
                        label="Type"
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
                        type='number'
                        id="standard-full-width"
                        label="Open"
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
                        label="Close"
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
                        label="Area"
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
                
                <div style={{ justifyContent: 'center',  }}>
                    <Button style={{ marginTop: '50px', marginLeft:'10px' }} variant='contained' color='primary'>Save</Button>
                </div>
            </div>
        </div>
    )
}
