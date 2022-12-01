import '../styles/Projects.css'

const Projects = () => {

    return <>
    
        <div className='d-flex  flex-column'>
            <div className='education-one my-2  justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one'>
                    <span className='university-name'>Portfolio</span>
                    <span className='university-degree'>Technologies: React, NodeJS, FontAwesome, Bootstrap 5, Lottie Files</span>
                    <span > <a className='poc' href={"http://github.com/marinasy-marti/reactportfolio"}>Project Link</a></span>
                </div>
                <div>
                    <span className='year'>Nov 2022</span>
                </div>
            </div>
        </div>
        <div className='d-flex  flex-column'>
            <div className='education-one my-2  justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one'>
                    <span className='university-name'>TimeClock for employees</span>
                    <span className='university-degree'>Technologies: React, C++, Arduino , MySQL</span>
                    <span><a className='poc' href="http://github.com/marinasy-marti/systemeDePointageParEmpreinteDigital">Project Link</a></span>
                </div>
                <div>
                    <span className='year'>June - Dec 2022</span>
                </div>
            </div>
        </div>

        <div className='d-flex  flex-column'>
            <div className='education-one my-2  justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one'>
                    <span className='university-name'>Mikrotik Hotspot</span>
                    <span className='university-degree'>Technologies: RouterOS Mirktorik, HTML, CSS</span>
                </div>
                <div>
                    <span className='year'>Nov 2022</span>
                </div>
            </div>
        </div>

    </>
}


export default Projects;    