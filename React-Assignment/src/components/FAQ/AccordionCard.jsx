import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react'

const AccordionCard = ({data}) => {
    const[Open,setOpen]=useState(false);
const handleClick=()=>{
setOpen(!Open);
}

  return (
    <div className='w-full p-[1px] border rounded-xl bg-gradient-to-l from-[#06286E] to-[#164EC0]'>
        <div className="bg-background rounded-xl font-inter px-4 py-6">
            <div open={Open}>
                <div onClick={handleClick} className='cursor-pointer flex justify-between'>
                    <p className='text-[26282C] text-base font-semibold leading-7'>
                        {data?.summary}
                    </p>
                    <IoIosArrowDown  />
                </div>
                <div className={`font-medium text-[#4e4e50] transition-all ease-out duration-300 text-wrap overflow-hidden ${Open ? 'h-20 mt-4' : 'h-0 mt-0'}`}
          >
                    {data?.detail}
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccordionCard