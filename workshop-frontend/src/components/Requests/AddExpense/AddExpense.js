import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button, Divider, Grid, TextareaAutosize, TextField } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        width: '560px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function AddExpense(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <span onClick={handleOpen}>
                {props.component}
            </span>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title" style={{ justifyContent: 'center', textAlign: 'center', alignItems: 'center' }}><PostAddIcon style={{ color: 'blue', width: '40px', height: '40px' }} />Edit</h2>
                        <Divider style={{ marginBottom: '20px' }} />
                        <Grid container spacing={3}>
                            <Grid item sm={6}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginTop: '-6px' }}><h4>Expense Name : </h4></div> <TextField size='small' style={{ width: '100px' }} disabled variant="outlined" ></TextField>
                                </div>
                            </Grid>
                            <Grid item sm={6}>
                                <div style={{ display: 'flex', marginLeft:'15px' }}>
                                    <div style={{ marginTop: '-8px' }}><h4 style={{ paddingBottom: '10px' }}>Expense Type: </h4></div> <TextField size='small' style={{ width: '100px' }} variant="outlined" ></TextField>
                                </div>
                            </Grid>
                            <Grid item sm={6}>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ marginTop: '-6px' }}><h4>Quantity of Item: </h4></div> <TextField size='small' style={{ width: '100px' }} disabled variant="outlined" ></TextField>
                                </div>
                            </Grid>
                            <Grid item sm={6}>
                                <div style={{ display: 'flex', marginLeft:'15px' }}>
                                    <div style={{ marginTop: '-8px' }}><h4 style={{ paddingBottom: '10px' }}>Cost of Item : </h4></div> <TextField size='small' style={{ width: '100px' }} variant="outlined" ></TextField>
                                </div>
                            </Grid>
                            <Grid item sm={12}>
                                {/* <div style={{ display: 'flex' }}> */}
                                    <b>Expense Description:</b> <TextareaAutosize style={{ width: '100%', borderRadius: '5px', }} aria-label="minimum height" minRows={5}  />
                                {/* </div> */}
                            </Grid>
                        </Grid>
                        <div style={{marginLeft:'350px',marginTop:'20px', width:'100%'}}>
                            <Button variant='contained' color="primary">Add Expense</Button>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
}
