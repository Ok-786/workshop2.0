import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListIcon from '@material-ui/icons/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import PermPhoneMsgOutlinedIcon from '@material-ui/icons/PermPhoneMsgOutlined';
import SidebarStyles from './SidebarStyles';
import { Avatar } from '@material-ui/core';
import logo from '../../Images/logo.png';

export default function Sidebar(props) {
    const classes = SidebarStyles();

    const [open, setOpen] = useState(false);



    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

   

    return (
        <Fragment>
            <div className={classes.root}>
                {/* <CssBaseline /> */}
                {/* <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>

                    </Toolbar>
                </AppBar> */}
                <div className={classes.test}>
                    <div className={clsx({
                        [classes.toolbarClose]: !open,
                        [classes.toolbar]: open,

                    })}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={open ? handleDrawerClose : handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton)}
                        >
                            <ListIcon />
                        </IconButton>
                        <div style={{ marginLeft: '18px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>

                            <Typography
                                variant="h6"
                                noWrap
                                className={clsx({
                                    [classes.hide]: !open,
                                })}
                            >
                                <b>
                                    Workshop
                                </b>
                            </Typography>
                            <Avatar
                                style={{ marginLeft: '15px' }}
                                className={clsx({
                                    [classes.hide]: !open,
                                })} src={logo} alt="logo"
                            />
                        </div>

                    </div>
                    <Divider />
                    <div className={classes.profilebar}>
                        <div style={{ display: 'inline-flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                            <Avatar src={'#'} alt="Abdullah Makix" />
                        </div>
                        <Typography
                            noWrap
                            className={clsx({
                                [classes.hide]: !open,
                            })}
                        >
                            Abdullah Malix
                        </Typography>
                        <Typography
                            noWrap
                            style={{ color: 'gray' }}
                            className={clsx({
                                [classes.hide]: !open,
                            })}
                        >
                            Toyota
                        </Typography>
                    </div>
                    <Divider />
                </div>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >

                    <div className={classes.drawerContent}>
                        <List className={clsx({
                            [classes.marginIcon]: !open,
                        })}>
                            <h4
                                className={clsx({
                                    [classes.hide]: !open,
                                })}
                                style={{ marginLeft: '10px', color: 'gray' }}>You</h4>
                            {['Dashboard', 'Requests', 'Calendar'].map((text, index) => {
                                switch (text) {
                                    case "Dashboard":
                                        return (
                                            <ListItem button onClick={() => {
                                                props.setSelectedComponent('Dashboard');
                                            }}
                                                className={classes.dropDownPanel} key={text}
                                            >
                                                <ListItemIcon>{index === 0 && <DashboardOutlinedIcon className={classes.drawerIcon} />}</ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        )
                                    case "Requests":
                                        return (
                                            <ListItem button onClick={() => {
                                                props.setSelectedComponent('Requests')
                                            }} className={classes.dropDownPanel} key={text}>
                                                <ListItemIcon>{index === 1 && <MailOutlineOutlinedIcon className={classes.drawerIcon} />}</ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        )

                                    default:
                                        return (
                                            <ListItem button onClick={() => {
                                                props.setSelectedComponent('Calendar')
                                            }} className={classes.dropDownPanel} key={text}>
                                                <ListItemIcon>{index === 2 && <DateRangeOutlinedIcon className={classes.drawerIcon} />}</ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        )
                                }
                            })}
                        </List>
                        <List className={clsx({
                            [classes.marginIcon]: !open,
                        })}>
                            <h4
                                className={clsx({
                                    [classes.hide]: !open,
                                })}
                                style={{ marginLeft: '10px', color: 'gray' }}>Your Company</h4>
                            {['Live', 'Store', 'Employees', 'Clients'].map((text, index) => {
                                switch (text) {
                                    case "Live":
                                        return (
                                            <ListItem button onClick={() => {
                                                props.setSelectedComponent('Live')
                                            }} className={classes.dropDownPanel} key={text}>
                                                <ListItemIcon>{index === 0 && <RoomOutlinedIcon className={classes.drawerIcon} />}</ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        )
                                    case "Store":
                                        return (
                                            <ListItem button onClick={() => {
                                                props.setSelectedComponent('Shop')
                                            }} className={classes.dropDownPanel} key={text}>
                                                <ListItemIcon>{index === 1 && <StorefrontOutlinedIcon className={classes.drawerIcon} />}</ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        )
                                    case "Employees":
                                        return (
                                            <ListItem button onClick={() => {
                                                props.setSelectedComponent('Employees')
                                            }} className={classes.dropDownPanel} key={text}>
                                                <ListItemIcon>{index === 2 && <WorkOutlineOutlinedIcon className={classes.drawerIcon} />}</ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        )

                                    default:
                                        return (
                                            <ListItem button onClick={() => {
                                                props.setSelectedComponent('Clients')
                                            }} className={classes.dropDownPanel} key={text}>
                                                <ListItemIcon>{index === 3 && <PeopleOutlineOutlinedIcon className={classes.drawerIcon} />}</ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        )
                                }
                            })}
                        </List>

                        <List className={clsx({
                            [classes.marginIcon]: !open,
                        })}>
                            <h4
                                className={clsx({
                                    [classes.hide]: !open,
                                })}
                                style={{ marginLeft: '10px', color: 'gray' }}>Support</h4>
                            {['Knowledge Base', 'Contact Us'].map((text, index) => {
                                switch (text) {
                                    case "Knowledge Base":
                                        return (
                                            <ListItem button onClick={() => {
                                                props.setSelectedComponent('Knowledge Base')
                                            }} className={classes.dropDownPanel} key={text}>
                                                <ListItemIcon>{index === 0 && <MenuBookOutlinedIcon className={classes.drawerIcon} />}</ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        )
                                    case "Contact Us":
                                        return (
                                            <ListItem button onClick={() => {
                                                props.setSelectedComponent('Contact Us')
                                            }} className={classes.dropDownPanel} key={text}>
                                                <ListItemIcon>{index === 1 && <PermPhoneMsgOutlinedIcon className={classes.drawerIcon} />}</ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItem>
                                        )

                                    default:
                                        return (
                                            <Fragment></Fragment>
                                        )
                                }
                            })}
                        </List>

                        <List
                            className={clsx({
                                [classes.hide]: !open,
                                [classes.marginIcon]: !open,
                            })}>
                            <h4
                                style={{ marginLeft: '10px', color: 'gray' }}>Build Info</h4>
                            {['2021 Dec 30, 5:33:15 PM'].map((text, index) => (
                                <ListItem button key={text}><ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar2} />
                    {props.selectedComponent === 'Dashboard' && props.dashboard} 
                    {props.selectedComponent === 'Requests' && props.requests} 
                    {props.selectedComponent === 'Calendar' && props.calander} 
                    {props.selectedComponent === 'MyAccount' && props.myaccount} 
                    {props.selectedComponent === 'Live' && props.map} 
                    {props.selectedComponent === 'Shop' && props.shop} 
                    {props.selectedComponent === 'Clients' && props.client} 
                    {props.selectedComponent === 'Employees' && props.employee} 
                </main>
            </div>
        </Fragment>
    )
}
