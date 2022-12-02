import Header  from './SectionHeader';
import '../styles/Resume.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserGraduate, faBriefcase, faCode, faListCheck, faLanguage} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Skills  from './Skills';
import Projects from './Projects';
import Education from './Education';
import Work from './Work';
import Languages from './Language';






const userGraduateIcon = <FontAwesomeIcon icon={faUserGraduate}/>;
const workIcon =  <FontAwesomeIcon icon={faBriefcase} /> 
const codeIcon = <FontAwesomeIcon icon={faCode} />
const projectsListIcon = <FontAwesomeIcon icon={faListCheck} /> 
const languageIcon = <FontAwesomeIcon icon={faLanguage} />
 
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
    const [languages, setLanguages] = useState(false);


    const setAllFalse = () => {
        setEducation(false);        
        setWork(false);        
        setProjects(false);        
        setSkills(false);   
        setLanguages(false);          
    }

    const changeState = (function1, state1) => {
        setAllFalse();
        function1(state1);
    }
    return <>
        <div className='resume-outer-section d-flex flex-column'>
            <span><Header info={title}/></span>
            <div className='resume-new-section row'
            style={{width:"70%",height:"450px", marginInline:"auto"}}>
                <div className='col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex flex-row px-0 shadow-lg' 
                
                >
                    <div className='d-flex flex-column bg-new text-white'>
                        <span className='icons-span'>{userGraduateIcon}</span>
                        <span className='icons-span'>{workIcon}</span>
                        <span className='icons-span'>{codeIcon}</span>
                        <span className='icons-span'>{projectsListIcon}</span>
                        <span className='icons-span'>{languageIcon}</span>
                    </div>
                    <div className='d-flex flex-column'>
                        <span className={ education === false ? 'resume-option-items' : 'selected resume-option-items'} onClick={ () => { changeState(setEducation,true); }}>Education</span>                        
                        <span className={ work === false ? 'resume-option-items' : 'selected resume-option-items'} onClick={ () => { changeState(setWork,true); }}>Work</span>
                        <span className={ skills === false ? 'resume-option-items' : 'selected resume-option-items'} onClick={ () => { changeState(setSkills,true); }}>Skills</span>
                        <span className={ projects === false ? 'resume-option-items' : 'selected resume-option-items'} onClick={ () => { changeState(setProjects,true); }}>Projects</span>
                        <span className={ languages === false ? 'resume-option-items' : 'selected resume-option-items'} onClick={ () => { changeState(setLanguages,true); }}>Languages</span>
                    </div>
                </div>
                <div className='col-lg-8 col-md-8 resume-right-section'>
                    { education === true && <Education /> }
                    { work === true && <Work /> }
                    { skills === true  && <Skills /> }
                    { projects === true && <Projects /> }
                    { projects === true && <Languages /> }
                </div>
            </div>
        </div>
    </>
};

export default Resume; 