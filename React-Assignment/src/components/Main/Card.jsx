import Reload from '../../assets/images/reload_icon.svg'
import Left from '../../assets/images/left.svg'
import Right from '../../assets/images/right.svg'
import FullScreen from '../../assets/images/fullscreen.svg'
import { useState } from 'react'

const Card = () => {
    const[currentCard,setCurrentCard]=useState(0)
    const cardsLength=10;

const leadingZero = (currentCard+ 1) < 10 ? '0' : '';
const cardNumber = leadingZero + (currentCard + 1);

const isLastCard = currentCard >= cardsLength - 1;
const buttonClass = isLastCard ? "opacity-50 cursor-not-allowed" : "cursor-pointer active:scale-90 transition-all duration-200";

const index=currentCard<=0 ?"opacity-50 cursor-not-allowed" : "cursor-pointer active:scale-90 transition-all duration-200"

const handleFor=()=>{
    if(currentCard<cardsLength-1)
        setCurrentCard(prev=>prev+1);
}

const handleback=()=>{
    if(currentCard>0)
        setCurrentCard(prev=>prev-1)
}

  return (
    <div className='mx-auto flex justify-between items-center w-4/5 xl:w-1/2 lg:w-4/5'>
         <img
                src={Reload}
                alt="Reload icon"
                className="cursor-pointer duration-300 hover:rotate-[275deg]"
            />
            <div>
            <img
                    src={Left}
                    alt="Left icon"
                    className={index}
                    onClick={handleback}
                />
                <span>
                    {cardNumber}/{cardsLength}
                </span>
                <img
                    src={Right}
                    alt="Right icon"
                    className={buttonClass}
                    onClick={handleFor}
                /> 
            </div>
            <img
                src={FullScreen}
                alt="FullScreen icon"
                className="cursor-pointer hover:scale-110 duration-200"
            />
    </div>
  )
}

export default Card