
import '../styles/App.css';
import bitmoji from '../assets/bitmojime.jpg'
/*Component*/
import Aboutme  from '../components/Aboutme.jsx';
import Resume from '../components/Resume.jsx'
import Contact from '../components/Contact.jsx'
import SectionHeader  from '../components/SectionHeader.jsx'
import {useState} from 'react'


function App() {
  
  const contact= {
    title: 'Contact me',
    desc: '', 
  };

  const [openNav, setOpenNav] = useState(false);   

  return <>
    <div className="App">
      <div className='navbar-option-mobile'> 
           <div className='el'>
            <span className='me'> <img className='responsive-img-img' alt='heorimage' src={bitmoji}/> Behamby Marinasy</span>
           </div>
           <div className='el'>
              <div className='bars'  onClick={ () =>  setOpenNav(!openNav) } >  </div>
           </div>
      </div>
      <nav 
          className=
            { 
              !openNav ? 'd-flex flex-rows px-9 py-2 bg-nav navbar-new transition-all'
                      :'d-flex flex-rows px-9 py-2 bg-nav navbar-fixed-new transition-all'
            }
          >
            <span className='me'>Behamby Marinasy</span>
            <div className='d-flex flex-rows'>
              <span className='mx-4 nav-items'>Home</span>
              <span className='mx-4 nav-items'>About me</span>
              <span className='mx-4 nav-items'>Resume</span> 
              <span className='mx-4 nav-items'>Contact me</span>        
            </div>
        </nav>
      <header className="App-header herosection px-10 py-5">
        
        <div className='second-herosection row justify-content-center'>
            <div className='col-lg-5 col-md-6 col-sm-12 a'>
               <div className='d-flex flex-column justify-content-center about-me-info'>
                <span className='about-me-text'>
                    Hello, I'm <span className='about-me-name'>Marinasy Behamby</span> 
                </span>
                <span className='about-me-devfs'>
                    Enthusiastic IT 
                </span>
                <span className='about-me-sub'>
                   I build front-end and back-end applications   
                </span>
                <div className='d-flex flex-row justify-content-center mt-5'>
                  <button className='get-resume'>Get Resume</button>
                </div>
               </div>
            </div> 
            <div className='responsive-img col-lg-6 col-md-6 col-sm-12 animate d-flex justify-content-center'>
                  <img className='img-fuild my-img' alt='heorimage' src={bitmoji}/>
            </div>
        </div>
      </header>
    <main>
        <section>
          <Aboutme />
        </section> 
        <section>
            <Resume /> 
        </section>
        <section className='contact'>
          <div className='contact-me-part '>
            <div className='relative-bg'></div>
            <div className='contact-inner-part d-flex flex-column'>
                  <SectionHeader  info={contact} />  
                  <Contact />
            </div>
          </div>
        </section>
    </main>
    </div>
  </>;
}

export default App;
