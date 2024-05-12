import { useState } from "react";

const Section = () => {
  const subjects = ["Study", "Quiz", "Test", "Game", "Others"];

  const [active, setActive] = useState(subjects[0]);

  const handleChange = (tab) => {
    setActive(tab);
  };


  return (
    <div className="font-inter text-xl text-[#696671] text-center">
      <ul className="inline-flex justify-center items-center gap-x-10">
      {
                    subjects.map((tab, idx) => (
                        <li
                            key={idx}
                            className={`capitalize cursor-pointer px-3 pb-[14px] ${tab === active && "text-[#06286E] font-bold border-b-2 border-[#06286E]"}`}
                            onClick={() => handleChange(tab)}
                        >
                            {tab}
                        </li>
                    ))
                }
      </ul>
    </div>
  );
};

export default Section;
