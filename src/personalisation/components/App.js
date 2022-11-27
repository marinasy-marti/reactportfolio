
import '../styles/App.css';
import bitmoji from '../assets/bitmojime.jpg'
/*Component*/
import Aboutme  from '../components/Aboutme.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header herosection px-10 py-5">
        <nav className='d-flex flex-row justify-content-between'>
          <span className='me'>Behamby Marinasy</span>
          <div className='d-flex flex-row'>
            <span className='mx-4 nav-items'>Home</span>
            <span className='mx-4 nav-items'>About me</span>
            <span className='mx-4 nav-items'>Resume</span>
            <span className='mx-4 nav-items'>Test</span>
            <span className='mx-4 nav-items'>Contact me</span>        
          </div>
        </nav>
        <div className='second-herosection row justify-content-center'>
            <div className='col-lg-5 col-md-6 col-sm-12 a'>
               <div className='d-flex flex-column justify-content-center about-me-info'>
                <span className='about-me-text'>
                    Hello, I'm <span className='about-me-name'>Marinasy Behamby</span> 
                </span>
                <span className='about-me-devfs'>
                    Fullstack and Enthusiastic Dev
                </span>
                <span className='about-me-sub'>
                   I build front-end and back-end applications   
                </span>
                <div className='d-flex flex-row justify-content-center mt-5'>
                  <button className='get-resume'>Get Resume</button>
                </div>
               </div>
            </div> 
            <div className='col-lg-6 col-md-6 col-sm-12 animate d-flex justify-content-center'>
                  <img className='img-fuild my-img' alt='heorimage' src={bitmoji}/>
            </div>
        </div>
      </header>
    <main>
        <Aboutme />
    </main>
    </div>
  );
}

export default App;
