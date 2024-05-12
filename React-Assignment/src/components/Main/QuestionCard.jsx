import {useState} from 'react'
import Bulb from '../../assets/images/bulb.svg'
import Speaker from '../../assets/images/speaker_logo.svg'
import Card from './Card'
import ReactCardFlip from "react-card-flip";


const QuestionCard = () => {
const[toggle,setToggle]=useState(false)

const handletoggle=()=>{
    setToggle(prev=>!prev)
}

const toggleLight = (e) => e.stopPropagation();
const toggleAudio = (e) => e.stopPropagation();

  return (
    <div>
            <div className="mx-auto">
                <ReactCardFlip isFlipped={toggle}>
                    <div
                        onClick={handletoggle}
                        className="flip-card-front w-[100%] xl:w-[58%] h-[393.194px] card-bg-gradient-blue rounded-[42.507px] mx-auto flex items-center justify-center relative cursor-pointer">
                        <p className="text-white font-lato font-bold text-[2.3910625rem] tracking-[0.765px]">
                            9 + 6 + 7x - 2x - 3
                        </p>

                        <img
                            src={Bulb}
                            alt="Bulb icon"
                            className="absolute left-[34px] top-[34px] cursor-pointer hover:scale-110 transition-all duration-200"
                            onClick={toggleLight}
                        />
                        <img
                            src={Speaker}
                            alt="Speaker Logo"
                            className="absolute right-[34px] top-[34px] cursor-pointer hover:scale-110 transition-all duration-200"
                            onClick={toggleAudio}
                        />
                    </div>


                    <div
                        onClick={handletoggle}
                        className="flip-card-back w-[100%] h-[393.194px] card-bg-gradient-darkblue rounded-[42.507px] mx-auto relative flex items-center justify-center  cursor-pointer">
                        <p className="text-white font-lato font-bold text-[2.3910625rem] tracking-[0.765px]">
                            5x + 12
                        </p>

                        <img
                            src={Bulb}
                            alt="Bulb icon"
                            className="absolute left-[34px] top-[34px] cursor-pointer hover:scale-110 transition-all duration-200"
                            onClick={toggleLight}
                        />
                        <img
                            src={Speaker}
                            alt="bulb icon"
                            className="absolute right-[34px] top-[34px] cursor-pointer hover:scale-110 transition-all duration-200"
                            onClick={toggleAudio}
                        />
                    </div>
                </ReactCardFlip>
            </div>

            <div className="mt-20">
                <Card/>
            </div>
        </div>
  )
}

export default QuestionCard