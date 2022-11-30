import Header  from './SectionHeader';
import '../styles/Resume.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faBriefcase, faCode, faListCheck} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Skills  from './Skills';
import Projects from './Projects';
import Education from './Education';
import Work from './Work';






const userGraduateIcon = <FontAwesomeIcon icon={faUserGraduate}/>;
const workIcon =  <FontAwesomeIcon icon={faBriefcase} /> 
const codeIcon = <FontAwesomeIcon icon={faCode} />
const projectsListIcon = <FontAwesomeIcon icon={faListCheck} /> 

const title = {
    title: 'Resume',
    desc: 'my resume'
};

const Resume = () => 
{
    const [ education, setEducation ] = useState(true); 
    const [skills, setSkills] = useState(false); 
    const [work, setWork] = useState(false); 
    const [projects, setProjects] = useState(false);


    const setAllFasle = () => {
       setEducation(false);        
        setWork(false);        
        setProjects(false);        
        setSkills(false);        
        (false);        
    }
    return <>
        <div className='resume-outer-section d-flex flex-column'>
            <span><Header info={title}/></span>
            <div className='resume-new-section row'
            style={{width:"70%",height:"400px", marginInline:"auto"}}>
                <div className='col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex flex-row px-0 shadow-lg' 
                
                >
                    <div className='d-flex flex-column bg-new text-dark'>
                        <span className='icons-span'>{userGraduateIcon}</span>
                        <span className='icons-span'>{workIcon}</span>
                        <span className='icons-span'>{codeIcon}</span>
                        <span className='icons-span'>{projectsListIcon}</span>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className='resume-option-items'>Education</span>
                        <span className='resume-option-items'>Work</span>
                        <span className='resume-option-items'>Skills</span>
                        <span className='resume-option-items'>Projects</span>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 resume-right-section'>
                    { education === true && <Education /> }
                    { work === true && <Work /> }
                    { skills === true  && <Skills /> }
                    { projects === true && <Projects /> }
                </div>
            </div>
        </div>
    </>
};

export default Resume; 