import '../styles/SectionHeader.css'



const  SectionHeader = ({info:{title,desc}}) =>{

    return (
        <div>
            <h2>{title}</h2>
            <p className='desc'>{desc}</p>
        </div>
    );
}



export default SectionHeader;