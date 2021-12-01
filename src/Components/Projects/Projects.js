import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Box } from '@mui/system';
import './pro.css'
const Projects = () => {
    let { id } = useParams();
    let [project, setProject] = useState({})
    useEffect(() => {
        fetch(`http://localhost:9999/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])
    return (
        <Container>
            <Box className='d-flex flex-column ' >
                <div>
                    <img className='mx-2 img-fluid' data-aos="fade-down-right" src={project.img} alt="" />
                    <img className='mx-2 img-fluid' data-aos="fade-up" src={project.img2} alt="" />
                    <img className='mx-2 img-fluid' data-aos="fade-down-left" src={project.img3} alt="" />
                </div>
                <div className='text-size' >
                    <h1 className='text-center abouts-color' > {project.name} </h1>
                    <h4 className='text-center text-All-color ' > {project.info} </h4>
                    <h4 className='text-center text-All-color ' >
                        im use this website React , Firebase , express , MongoDB , bootstrap , MDB , and Others
                    </h4>
                    <div className='my-5 d-flex justify-content-around ' >
                        <a className='btn btn-style' href={project.link}> Live Site </a>
                        <a className='btn btn-style' href={project.gitclint}> GitHube Client </a>
                        {
                            project.gitserver && <a className='btn btn-style' href={project.gitserver}> GitHube Server </a>
                        }

                    </div>
                </div>
            </Box>
        </Container>
    );
};

export default Projects;