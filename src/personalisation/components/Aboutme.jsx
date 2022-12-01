import '../styles/Aboutme.css';
import SectionHeader  from './SectionHeader';
import "@lottiefiles/lottie-player";

const title = {
    title: "About me",
    desc: "Why choose me? "
}

const Aboutme = () =>{

    return(
        <section className='about-me-section about-me-inside my-5'>
            <div className='d-flex flex-column'>
                <SectionHeader info={title}/>
            </div>
            <div className='row justify-content-center shadow-lg my-5'>
                <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center'>
                    <lottie-player 
                        src="https://assets7.lottiefiles.com/packages/lf20_3ntisyac.json"
                        background="transparent" 
                        speed="1"  
                        style={{width:"500px",height:"500px"}}
                        loop autoplay
                    ></lottie-player>
                </div>
                  
                <div className='col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column'>
                    <div className='text-about-me-container  v'>
                   <p className='pa'> I am a Software Engineer, I have a strong professionalism and a strong willing to improve my skills and my personality as human being and my 
                        relationship with other. I am flexible with technology changing and I always do a clean work.</p><br />
                        <div className='highlights'>
                            <span className='highlights-text'> Here are a few highlights</span>
                            <ul className='highlights-list'>
                                <li>Front-end: React Js, Vue Js, JavaScript, Bootstrap, CSS/Saas</li>
                                <li>Back-end: Node Js, Flask </li>
                                <li>Databases: MySQL, MongoDB</li>
                                <li>Cross plateform Mobile development with React native</li>
                                <li>Desktop development with C,C++, Java, Python and NodeJS.</li>
                                <li>Versioning: Git</li>
                                <li>Container: Docker</li>
                                <li>Agile Software Development</li>
                                <li>Linux admnistration</li>
                            </ul>
                            <p className='another-hightlights'>Apart from Web, Mobile and Deskop development I do:</p>
                            <ul className="anoter-hightlights-list">
                                <li>Microcontroler programming with Arduino, MicroC and Assembly</li>
                                <li>Embeded System and Electronic design and production</li>
                                <li>RouterOS configuration with background knowledge in Networking, Mikrotik , Cisco.</li>
                            </ul>
                        </div>                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Aboutme;