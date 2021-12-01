import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './HDMain.css'


const Hdmain = () => {
    const handleType = (count) => {
        // access word count number
        console.log(count)
    }
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }
    return (
        <div className='App my-5 '>
            <div>
                <img className='img-fluid img-Efact ' src="https://mattfarley.ca/img/mf-avatar.svg" alt="" />
                <div className='mt-5' >
                    <h1 className='text-All-color' > HI! </h1>
                    <h2 className='text-All-color' > Welcome </h2>
                </div>
            </div>
            <div className='pb-5' >
                <h2 style={{ paddingTop: '6', margin: 'auto 0', fontWeight: 'normal' }}>
                    <span className='text-All-color' >  I'm a {' '} </span>
                    <span style={{ color: '#7510f7', fontWeight: '600' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['MAHIM', 'Junior MERN Stack Developer', 'Frontend Developer',]}
                            loop={50}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                            onLoopDone={handleDone}
                            onType={handleType}
                        />
                    </span>
                </h2>
            </div>
            <div className='pb-5'>
                <a className='btn-style btn mx-2' href="https://docs.google.com/document/d/1G3zG5yoL5pj3EvZTpFGNaEh0f_62wx745Egba3nIOH4/export?format=pdf" > My Resume </a>
                <a className='btn-style1 btn mx-2' href="https://drive.google.com/file/d/1c4DBrsv95OYCcJEer01AYwU8B-aubWf1/view?usp=sharing" > Watch Demo </a>
            </div>
        </div>
    );
}


export default Hdmain;