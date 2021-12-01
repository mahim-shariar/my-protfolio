import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
import { Container } from 'react-bootstrap';
import './Contact.css'

init("user_NRf7diQwuUv2Bb08KfTHH");

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ht4tzme', 'template_bg4eths', form.current, 'user_NRf7diQwuUv2Bb08KfTHH')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset()
    };

    return (
        <Container id="contact" data-aos="zoom-out-down" className='py-5'  >
            <form ref={form} onSubmit={sendEmail} className='mx-auto d-flex flex-column w-75 '>
            <h1 className='abouts-color' > Contact me </h1>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input className='back-color btn' type="submit" value="Send" />
            </form>
        </Container>
    );
};

export default Contact;