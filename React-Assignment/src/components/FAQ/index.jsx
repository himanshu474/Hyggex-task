import Accordion from "./Accordion"

const Faq = () => {
    return (
        <section id="faq">
            <h3 className="bg-gradient-to-b from-[#06286E] to-[#164EC0] bg-clip-text text-transparent font-inter font-bold text-5xl">
                FAQ
                </h3>
            <div >
                <Accordion />
            </div>
        </section>
    )
}

export default Faq