import '../styles/Skills.css'

const Skills = () => {

    const value_dev = [
        {
            text:"Full Stack MERN",
            percentage: 50,
        },
        {
            text:"Full Stack MEVN",
            percentage:20.
        },
        {
            text:"Bootstrap 4, 5",
            percentage:40,
        },
        {
            text:"Backend: Flask, Node JS, C++",
            percentage: 30,
        },
       
        {
            text:"Flask",
            percentage:40,
        },
        {
            text:"SQL",
            percentage: 70,
        },
        {
            text:"C and C++",
            percentage:80,
        },
        {
            text:"Python",
            percentage:60,
        },
       
        {
            text:"React Native",
            percentage:20,
        },
        {
            text:"Versioning: Git",
            percentage:60,
        },
        {
            text:"Agile Software Develpment",
            percentage:20,
        },
        {
            text:"Domain Drivern Design",
            percentage:40,
        },
    ]

    const value_net = [
        {
            text:"Docker",
            percentage: 50,
        },
        {
            text:"CI/CD",
            percentage: 10,
        },
        {
            text:"Shell Scripting",
            percentage:60,
        },
        {
            text:"Linux administration ",
            percentage:80,
        },
        {
            text:"iptables",
            percentage:40,
        },
        {
            text:"pfSense",
            percentage:50,
        },
        {
            text:"Cisco",
            percentage: 30,
        },
        {
            text:"Mikrotik  ",
            percentage:45,
        },
        {
            text:"Network Programming: C++, Java",
            percentage:50,
        },
        
        
    ]

    const value_other = [
        {
            text:"Arduino",
            percentage: 85,
        },
        {
            text:"Embeded System",
            percentage: 60,
        },
        {
            text:"Mircocontroller Programming",
            percentage:60,
        },
        {
            text:"Robotics",
            percentage:60,
        },   
        
        {
            text:"Communication",
            percentage:60,
        },   
        {
            text:"Researching ",
            percentage:90,
        },  
    ]
    return <>
        <div className='skills-container'>
            <div className='marker'>
                <div className='box-title'>
                    <span>Development</span>    
                </div>
                <div className='box-content'>
                    <div className='row skills-box'>
                        {
                            value_dev.map((value_dev,index) => {
                                return <>
                                    <div className='col-lg-4 col-mg-12 col-sm-12 my-1'>
                                        <span className='language'>{value_dev.text}</span>
                                        <div className='progress-some'>
                                            <div className='progress-new' style={{width: `${value_dev.percentage}%`}}></div>
                                        </div>
                                    </div>
                                </>
                            })
                        } 
                    </div>
                </div>
            </div>
        </div>

        <div className='skills-container'>
            <div className='marker'>
                <div className='box-title'>
                    <span>Networking and System Admninistration</span>    
                </div>
                <div className='box-content'>
                    <div className='row skills-box'>
                        {
                            value_net.map((value_net,index) => {
                                return <>
                                    <div className='col-lg-4 col-mg-12 col-sm-12 my-1'>
                                        <span className='language'>{value_net.text}</span>
                                        <div className='progress-some'>
                                            <div className='progress-new' style={{width: `${value_net.percentage}%`}}></div>
                                        </div>
                                    </div>
                                </>
                            })
                        } 
                    </div>
                </div>
            </div>
        </div>

        <div className='skills-container'>
            <div className='marker'>
                <div className='box-title'>
                    <span>Other skills</span>    
                </div>
                <div className='box-content'>
                    <div className='row skills-box'>
                        {
                            value_other.map((value_other,index) => {
                                return <>   
                                    <div className='col-lg-4 col-mg-12 col-sm-12 my-1'>
                                        <span className='language'>{value_other.text}</span>
                                        <div className='progress-some'>
                                            <div className='progress-new' style={{width: `${value_other.percentage}%`}}></div>
                                        </div>
                                    </div>
                                </>
                            })
                        } 
                    </div>
                </div>
            </div>
        </div>



    </>
}


export default Skills; 