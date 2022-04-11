import * as React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Avatar, Box, Modal } from '@material-ui/core';
import image from '../../Images/i1.jpg';
import '../../index.css';
import Filter from '../Dashboard/Filter/Filter';

export default function Map() {
    const [selectedFilter, setSelectedFilter] = React.useState('All');
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 550,
        height: 500,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const clients = [
        {
            long: 73.0961,
            lat: 33.5925,
        }
    ];
    const workers = [
        {
            long: 73.1067,
            lat: 33.5995,
        }
    ]
    const [viewport, setViewport] = React.useState({
        longitude: 73.0481,
        latitude: 33.6245,
        zoom: 12
    });
    return (
        <React.Fragment>
            <Filter setSelectedFilter={setSelectedFilter} />
            <ReactMapGL {...viewport} width="100%" height="86vh" mapStyle='mapbox://styles/mapbox/streets-v11' style={{ color: 'red', lineColor: "green", }} onViewportChange={setViewport} mapboxApiAccessToken='pk.eyJ1Ijoib2stNzg2IiwiYSI6ImNrdHBsN2EzazAyNngzMWtndjE0ajF0YjMifQ.EH_h1lGgFsCHiaFK4uTSJQ' mapboxAccessToken='pk.eyJ1Ijoib2stNzg2IiwiYSI6ImNrdHBsN2EzazAyNngzMWtndjE0ajF0YjMifQ.EH_h1lGgFsCHiaFK4uTSJQ'>
                {(selectedFilter === 'All' || selectedFilter === 'Clients') && clients.map((client) => (
                    <Marker longitude={client.long} latitude={client.lat} offsetLeft={-20} offsetTop={-10}>
                        <div style={{ borderRadius: '25px', padding: '6px' }} id='myDIV2' >
                            <Avatar onClick={handleOpen} style={{cursor:'pointer'}} alt="Remy Sharp" src={image} sx={{ width: 56, height: 56 }} />
                        </div>
                    </Marker>
                ))}

                {(selectedFilter === 'All' || selectedFilter === 'Workers') && workers.map((worker) => (
                    <Marker longitude={worker.long} latitude={worker.lat} offsetLeft={-20} offsetTop={-10}>
                        <div style={{ borderRadius: '25px', padding: '6px' }} id='myDIV' >
                            <Avatar onClick={handleOpen} style={{cursor:'pointer'}} alt="Remy Sharp" src={image} sx={{ width: 56, height: 56 }} />
                        </div>
                    </Marker>
                ))}

                <Marker longitude={73.0481} latitude={33.6445} offsetLeft={-20} offsetTop={-10}>
                    {/* <BuildCircleIcon style={{ color: "blue" }}/> */}
                </Marker>
                <Marker longitude={73.0000} latitude={33.6745} offsetLeft={-20} offsetTop={-10}>
                    {/* <BuildCircleIcon style={{ color: "blue" }}/> */}
                </Marker>
                <Marker longitude={73.0981} latitude={33.6445} offsetLeft={-20} offsetTop={-10}>
                    {/* <BuildCircleIcon style={{ color: "blue" }}/> */}
                </Marker>
                <Marker longitude={73.0781} latitude={33.5845} offsetLeft={-20} offsetTop={-10}>
                    {/* <DirectionsCarFilledIcon style={{ color: "green" }}/> */}
                </Marker>
            </ReactMapGL>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    style={{ backgroundColor: 'transparent', border:'none' }}
                    sx={style}
                >
                    <div className='bodyContainer'>
                        <div className="card-container">
                            <span className="pro">Client</span>
                            <img className="round" style={{width:'120px'}} src={image} alt="user" />
                            <h3>Abdullah Malix</h3>
                            <h6>Street no# 6</h6>
                            <p>he's 16 years old and is driving a lamorgini <br /> 37405676576468</p>
                            <div className="buttons">
                                <button className="primary ghost">
                                    0322-33424242424
                                </button>
                            </div>
                            <div className="skills">
                                <h6>Car Features</h6>
                                <ul>
                                    <li>blue</li>
                                    <li>huadani</li>
                                    <li>Auto</li>
                                    <li>Hybrid</li>
                                    <li>Jboost</li>
                                    <li>power stearing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </React.Fragment>
    );
}