import { Backdrop, Fade, IconButton, makeStyles, Modal, TextareaAutosize, Typography } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import DraftsIcon from '@material-ui/icons/Drafts';
import SettingsBackupRestoreIcon from '@material-ui/icons/SettingsBackupRestore';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        boxShadow: theme.shadows[2],
        // width:'50%',
        padding: theme.spacing(6, 2, 4),
    },
}));

export default function LeaveRequest() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <Typography
                        noWrap
                    // variant='h6'
                    >
                        Leave Requests
                    </Typography>
                </div>
                <div>
                    <IconButton onClick={handleOpen} style={{ width: '25px', height: '25px', marginRight: '10px' }}>{<Add style={{ color: '#6792ef' }} />}</IconButton>
                    <IconButton style={{ width: '25px', height: '25px' }}>{<SettingsBackupRestoreIcon style={{ color: '#6792ef' }} />}</IconButton>
                </div>
            </div>

            <div style={{ justifyContent: 'center', marginBlockStart: '5%', alignItems: 'center', textAlign: 'center' }}>
                <DraftsIcon style={{ color: 'rgba(4, 197, 232, .3)', width: '70px', height: '70px' }} />
                <p style={{ color: 'darkgray' }}>No Pending Leave Requests</p>
            </div>

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
                        <Typography variant='h5' style={{ color: '#6792ef', marginBottom: '20px', justifyContent: 'center', display: 'flex' }}>
                            Add New Leave
                        </Typography>
                        <div style={{ display: 'inline-flex', paddingInline: '60px' }}>
                            <TextareaAutosize minRows={4} style={{ minWidth: '400px' }} />
                            {/* <Button style={{marginBlockEnd:'60px'}}>Add</Button> */}
                            <IconButton style={{ width: '50px', marginLeft: '20px', height: '50px', marginBlockEnd: '60px' }}>{<Add width='50' style={{ color: '#6792ef', fontSize: '60px' }} />}</IconButton>
                        </div>
                    </div>
                </Fade>
            </Modal>

        </div>
    )
}
