import Home from '../../assets/images/home.svg'
import RightArr from '../../assets/images/right-arrow.svg'

const Icons=()=>{
    return(
        <div className=' flex items-center font-inter font-medium'>
           <img src={Home} className="w-[30px] aspect-square cursor-pointer hover:scale-105 duration-200" alt="Home Icon"/>
            <img src={RightArr} className='w-[30px] aspect-square' alt='Right icon'/>
            <span className='cursor-pointer hover:scale-105 duration-200'>Flashcard</span>
            <img src={RightArr} className='w-[30px] aspect-square' alt="Right icon" />
            <span className="cursor-pointer hover:scale-105 duration-200">Mathematics</span>
            <img src={RightArr} className='w-[30px] aspect-square' alt="Right icon" />
            <span className='text-[#06286E] font-semibold'>Relation and Functions</span>
        </div>
    )
}

export default Icons