import FlashCard from "./FlashCard";
import QuestionCard from "./QuestionCard";
import Section from  './Section';

const Main=()=>{
    return(
        <>
        <h3 className=" bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text font-mont font-bold text-[2rem] leading-[2.438rem]">
        {"Relations and Functions ( Mathematics )"}
        </h3>

        <div className="mt-14 mb-8">
                <Section/>
        </div>
        <QuestionCard/>

        <div className="mt-20">
            <FlashCard/>
        </div>

        </>
    )
}

export default Main 