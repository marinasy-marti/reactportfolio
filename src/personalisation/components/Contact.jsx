import '../styles/Contact.css'
import "@lottiefiles/lottie-player";
import {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';




const Contact = () => {
    
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sendMailSatus, setSendMailStatus] = useState (false);

    const form = useRef();
    const sendEmail = (e) => {
        const mailServiceId = "service_t57qprf";
        const mailTemplateId = "template_iupxjzt";
        const mailPublicKey = "JeJL8hXWwcLiNcsmL";

        const templateParams ={
            from_name:name,
            from_email: email,
            to_name:"Marinasy",
            message:message,
            reply_to: email,
        }
        
        e.preventDefault();
        emailjs.send(mailServiceId, mailTemplateId, templateParams, mailPublicKey)
          .then((result) => {
              console.log(result.text);
              if(result.text === 'OK'){
                setSendMailStatus(true);
              }
          }, (error) => {
              console.log(error.text);
          });

          
    };
    return <>
        <div className='contact-me row'>
            <div>
                <div className='contact-me-card row'>
                    <div className=' lottie-container col-mg-6 col-md-5 col-sm-12 left-contact px-2 py2'>
                        <span className='get-in-touch mx-4 m-y 5'>Get in touch</span>
                        <div className=' py-5 d-flex justify-content-center'>
                            <lottie-player 
                                    src="https://assets9.lottiefiles.com/packages/lf20_u25cckyh.json"
                                    background="transparent" 
                                    speed="1"  
                                    style={{width:"500px",height:"500px"}}
                                    loop autoplay
                            ></lottie-player>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-5 col-sm-12 my-auto'>
                        <div className='d-flex flex-column justify-content-center card-contact-right'>
                            <form ref={form}  onSubmit={sendEmail} >
                                <div className='input-group my-3 d-flex flex-column'>
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            setSendMailStatus(false);
                                        }}
                                        type="text"  
                                        id='name' 
                                        placeholder='Enter you name' 
                                        className='input-groups'
                                    />
                                </div>
                                <div className='input-group my-3 d-flex flex-column'>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setSendMailStatus(false);
                                        }}
                                        type="email"  
                                        id='email' 
                                        placeholder='Enter you email' 
                                        className='input-groups'
                                    />
                                </div>
                                <div className='input-group my-3 d-flex flex-column'>
                                    <label htmlFor="message">Message</label>
                                    <textarea 
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                            setSendMailStatus(false);

                                        }}
                                        type="text"  
                                        id='message' 
                                        placeholder='your message' 
                                        className='input-groups'
                                    ></textarea>
                                </div>
                                <div className='input-group my-3 d-flex flex-column'>
                                    <input className={ sendMailSatus === false ? 'btn' : 'btn btn-success'} type={'submit'} 
                                    value={ sendMailSatus === false ? 'Send Message' : 'Message Sent'} />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Contact; 