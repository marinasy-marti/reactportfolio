import '../styles/Education.css'

const Education = () => {

    return <>
        <div className='d-flex  flex-column'>
            <div className='education-one my-4  justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one'>
                    <span className='university-name'>English Teaching Program</span>
                    <span className='university-degree'>Level: Advanced 1</span>
                </div>
                <div>
                    <span className='year'>2022 - 2022</span>
                </div>
            </div>
        </div>

        <div className='d-flex  flex-column'>
            <div className='education-one my-4  justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one'>
                    <span className='university-name'>CNTEMAD: Centre National du Télé-Enseignement de Madagascar</span>
                    <span className='university-degree'>Grade: M2 in Database and Software Engineering</span>
                </div>
                <div>
                    <span className='year'>2020 - 2022</span>
                </div>
            </div>
        </div>


        <div className='d-flex  flex-column'>
            <div className='education-one my-4  justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one'>
                    <span className='university-name'>Faculty of Sciences of the University of Antananarivo </span>
                    <span className='university-degree'>Grade: M2 Computer Electronic Systems Engineering</span>
                </div>

                <div>
                    <span className='year'>2019 - 2022</span>
                </div>
            </div>
        </div>


        <div className='d-flex  flex-column'>
            <div className='education-one my-4  justify-content-between d-flex flex-row'>
                <div className='d-flex flex-column new-one'>
                    <span className='university-name'>Faculty of Sciences of the University of Antananarivo</span>
                    <span className='university-degree'>Bachelor's degree in Signals and Systems Physics Engineering</span>
                </div>
                <div>
                    <span className='year'>2016 - 2019</span>
                </div>
            </div>
        </div>
    </>
}


export default Education; 