import '../styles/Work.css'

const Work = () => {

    return <>
        <div className='work-inside-new'>
            <div className='d-flex flex-row  justify-content-between '>
                <span className='company-name'>Ministère de l’Enseignement Supérieur et de la Recherche Scientifique</span>
                <span className='time-passed-out'>June 2021 - Dec 2021</span>
            </div>
            <div className='d-flex flex-column'>
                <span className='position'>Computer Networking Intern :</span>
                <span className='position-desc'>
                    <ul>
                        <li>pfSense Administration</li>
                        <li>Designed and Produced a time clock for employee</li>
                    </ul>
                </span>
            </div>
        </div>

        <div className='work-inside-new'>
            <div className='d-flex flex-row  justify-content-between '>
                <span className='company-name'>Ministère du Tourisme</span>
                <span className='time-passed-out'>Oct 2018- Feb 2021</span>
            </div>
            <div className='d-flex flex-column'>
                <span className='position'>IT Intern :</span>
                <span className='position-desc'>
                    <ul>
                        <li>Linux (Ubuntu as Server) Administration </li>
                        <li>Created a Local live chat app using Php, MySQL, JavaScript</li>
                    </ul>
                </span>
            </div>
        </div>
    </>
}


export default Work; 