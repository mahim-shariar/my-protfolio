import React from 'react';
import './Abouts.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { ProgressBar, Container } from 'react-bootstrap';
AOS.init();

const Abouts = () => {
    return (

        <Container className='back-ground-full-bady margin-width ' data-aos="fade-in" id='abouts' >
            <div className='py-5 ' data-aos="fade-down" data-aos-easing="ease-in-sine" >
                <h1 className='text-All-color'>More <span className='abouts-color'> Abouts Me </span></h1>
                {/* <p className='abouts-color hr-style '>_______________________________________</p> */}
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4} data-aos="zoom-in-right" data-aos-easing="ease-in-sine"   >
                        <img className='img-fluid' src="https://i.ibb.co/RHs1dgZ/Lovepik-com-450061086-cartoon-character-image-of-a-smile-boy.png" alt="" />
                    </Grid>
                    <Grid item xs={12} md={4} data-aos="zoom-in-down" data-aos-easing="ease-in-sine" className='my-5' >
                        <div>
                            <h2 className='text-All-color text-start'> <span className='abouts-color' > Basic </span> Info </h2>
                        </div>

                        <Container>
                            <div className='my-5 ' >
                                {/* <h5 className='text-All-color ' > Date Of Birth: </h5> */}
                                <h5 className='text-All-color '  >Date Of Birth :  30 August 2004 </h5>
                            </div>
                            <div className='my-5 ' >
                                {/* <h5 className='text-All-color ' >   </h5> */}
                                <h5 className='text-All-color '  >Address :  Mymensingh , Bangladash </h5>
                            </div>
                            <div className='my-5' >
                                {/* <h5 className='text-All-color col-sm-12 '> Email: </h5> */}
                                <h5 className='text-All-color '> Email : mdmahim924214@gmail.com</h5>
                            </div>
                            <div className='my-5 '>
                                {/* <h5 className='text-All-color ' >  </h5> */}
                                <h5 className='text-All-color '  >Phone No : +8801970495849 </h5>
                            </div>
                            <div>

                            </div>
                        </Container>
                    </Grid>
                    <Grid item xs={12} md={4} data-aos="zoom-in-left"data-aos-easing="ease-in-sine"  >
                        <div className='my-5' >
                            <h2 className='text-All-color' > My <span className='abouts-color' > Skills </span></h2>
                        </div>
                        <div>
                            <h6 className='text-start text-All-color ' > HTML/CSS <ProgressBar now={90}   /> </h6>
                        </div>
                        <div>
                            <h6 className='text-start text-All-color ' > JavaScript <ProgressBar now={75}   /> </h6>
                        </div>
                        <div>
                            <h6 className='text-start text-All-color ' > React <ProgressBar now={85}   /> </h6>
                        </div>
                        <div>
                            <h6 className='text-start text-All-color ' > Express <ProgressBar now={80}  /> </h6>
                        </div>
                        <div>
                            <h6 className='text-start text-All-color ' > MongoDB <ProgressBar now={90}   /> </h6>
                        </div>
                        <div>
                            <h6 className='text-start text-All-color ' > Firebase <ProgressBar now={95}   /> </h6>
                        </div>
                        <div>
                            <h6 className='text-start text-All-color ' > Others <ProgressBar now={70}  /> </h6>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Abouts;
// https://i.ibb.co/RHs1dgZ/Lovepik-com-450061086-cartoon-character-image-of-a-smile-boy.png