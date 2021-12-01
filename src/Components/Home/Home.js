import React from 'react';
import Abouts from '../Abouts/Abouts';
import Hdmain from '../HDmain/Hdmain';
import Contact from '../Contact/Contact';
import Projects from '../Project/Projects';

const Home = () => {
    return (
        <div className=''>
            <Hdmain></Hdmain>
            <Abouts></Abouts>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;