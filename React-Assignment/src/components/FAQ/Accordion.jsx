import Data from '../../assets/data/FaqData'
import AccordionCard from './AccordionCard'

const Accordion = () => {
  return (
    <div className=" max-w-4xl mt-12 mb-80 flex flex-col gap-8">
        {
            Data.map((data,id)=>(
                <AccordionCard key={id} data={data}/>
            ))
        }
    </div>
  )
}

export default Accordion