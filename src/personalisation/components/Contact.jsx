import '../styles/Contact.css'
import "@lottiefiles/lottie-player";
import {useState} from 'react'



const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


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
                            <form >
                                <div className='input-group my-3 d-flex flex-column'>
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value)
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
                                            setEmail(e.target.value)
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
                                            setMessage(e.target.value)
                                        }}
                                        type="text"  
                                        id='message' 
                                        placeholder='your message' 
                                        className='input-groups'
                                    ></textarea>
                                </div>
                                <div className='input-group my-3 d-flex flex-column'>
                                    <button className='btn btn-success'>Send </button>
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