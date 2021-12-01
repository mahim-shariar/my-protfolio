import { Grid, Container, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import React from 'react';
import { useEffect, useState } from 'react';
import './Projects.css'

const Projects = () => {
    let [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('http://localhost:9999/project')
            .then(res => res.json())
            .then(data => setProjects(data))

    }, [])
    return (
        <Container className='margin-spacing' id='project' >
            <Box sx={{ flexGrow: 1 }} >
                <h1 className='my-5 text-All-color ' data-aos="zoom-in-down" > My <span className='abouts-color' >  Project  </span></h1>
                <Grid container spacing={2} >
                    {
                        projects.map(project =>

                            <Grid key={project._id} item xs={12} md={4} data-aos="zoom-in-down" >
                                <div>
                                    <img className='img-fluid img-style' src={project.img} alt="" />
                                </div>
                                <div>
                                    <h4 className='abouts-color' >{project.name}</h4>
                                    <Grid container spacing={2}>
                                        {
                                            project.uses.map(use => <Grid item xs={4} md={4} className='text-All-color' >
                                                {use}
                                            </Grid>)
                                        }
                                        <Box>
                                            <a href={project.link} className='btn btn-style ' > Live Site </a>
                                            <Link to={`/project/${project._id}`}>
                                                <button className='mx-2 my-4 btn btn-style '> more </button>
                                            </Link>
                                        </Box>
                                    </Grid>
                                </div>
                            </Grid>)

                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Projects;