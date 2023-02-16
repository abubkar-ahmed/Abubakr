import React from 'react';
import gmailLogo from '../images/icons8-gmail-logo-25.png';
import phoneLogo from '../images/icons8-phone-25.png';
import whatsapp from '../images/icons8-whatsapp-25.png';
import emailjs from '@emailjs/browser'; 
import Loading from './Loading';
import { useState } from 'react';

function Contact() {
    const [messageSent, setMessageSent] = React.useState(false);
    const [messageSentTwo, setMessageSentTwo] = React.useState(false);
    const [errMsg , setErrMsg] = useState('');

    const [loading , setLoading] = useState(false);

    const [formData , setFormData] = React.useState({
        name:"",
        email:"",
        message:""
    })


    function handleChange(event){
        const {name,value} = event.target ;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value 
            }
        })
    }
    


    function sendEmail(event){
        event.preventDefault();
        setLoading(true);
        setMessageSent(false);
        setMessageSentTwo(false);
        setErrMsg('');
        if(formData.name && formData.email && formData.message){
            emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formData,
                import.meta.env.VITE_EMAILJS_USER_ID,
                ).then(res =>{
                setFormData({
                    name:"",
                    email:"",
                    message:""
                })
                setMessageSent(true);
                setMessageSentTwo(true);
                setLoading(false)
            }).catch(err => {
                setMessageSent(true);
                setMessageSentTwo(false);
                setLoading(false);
                setErrMsg('Somthing Went Wrong Please Try Again Later')
            })
        }else{
            setMessageSent(true);
            setMessageSentTwo(false);
            setErrMsg('All Fields Are Required.')
            setLoading(false)
        }


    }
  return (
    <section className='contact' id='contact'>
        <div className="main-container">
            <h1><span>03. </span>What's Next?</h1>
            <h2>Get In Touch</h2>

            <div className="seconed-container">
                <h3>Contact</h3>
                <div className="contact-container">
                    <div className="contact-info">
                        <ul>
                            <li>
                                <img src={gmailLogo} alt="gmail-logo" />
                                <a href="mailto:abobkar96@gmail.com">abobkar96@gmail.com</a>
                            </li>
                            <li>
                                <img src={phoneLogo} alt="phoneLogo" />
                                <a href="tel:+966533436019">+966533436019</a>
                            </li>
                            <li>
                                <img src={whatsapp} alt="whatsapp" />
                                <a href="whatsapp://send?phone=+966533436019">+966533436019</a>
                            </li>
                        </ul>
                    </div>
                </div>
            
                <form onSubmit={sendEmail}>
                    <div className="name">
                        <label>Name</label>
                        <input type='text' name='name' onChange={handleChange} value={formData.name}/>
                    </div>

                    <div className="email">
                        <label>Email</label>
                        <input type='email' name='email' onChange={handleChange} value={formData.email}/>
                    </div>

                    <div className="msg">
                        <label>Message</label>
                        <textarea name='message' rows='7'  onChange={handleChange} value={formData.message}/>
                    </div>
                    {messageSent && (messageSentTwo? <h3 className='sent'>Massege Sent</h3> : <h3 className='err'>{errMsg}</h3>)}
                    {loading ? (
                    <div className="loading-container">
                        <Loading/>
                    </div>                        
                    ) : (
                        <button>Send</button>
                    )}

                    
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact