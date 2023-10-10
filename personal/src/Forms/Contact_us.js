import React from 'react';
import "./Contact_us.css"

const ContactUs = () => {

    
    return (
        <div className='container ContactMain'>
            <center>
            <div className='ContactHeading'>Contact Us</div>
            {/* https://formspree.io/f/xnqkvvbq */}
            <form method='post' action='https://formspree.io/f/xnqkvvbq' className='ConstactForm'>
                <input type='text' name='username' required placeholder='Username' className='ContactInputs'/>
                <input type='email' name='email' required placeholder='Email' className='ContactInputs'/>
                <textarea placeholder='Message' required name='message' className='ContactInputs'></textarea>
                <button name='send' type ='submit' className='ContactSubmit'>Submit</button>
            </form>
            </center>
        </div>
    );
}

export default ContactUs;
