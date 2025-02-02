import { useState } from "react";
import { motion } from "framer-motion";

const optionsList = ["Automotive", "Hospitality", "Retail", "Marketing", "Public Relations"];

const Scroll = () => {
    const [options, setOptions] = useState(optionsList);
    const [defaultIndex, setDefaultIndex] = useState(2);

    const handleOptionClick = (index) => {
        const shift = index - defaultIndex;
        if (shift !== 0) {
            setOptions((prevOptions) => {
                const newOptions = [...prevOptions];
                if (shift > 0) {
                    for (let i = 0; i < shift; i++) {
                        newOptions.push(newOptions.shift());
                    }
                } else {
                    for (let i = 0; i < Math.abs(shift); i++) {
                        newOptions.unshift(newOptions.pop());
                    }
                }
                return newOptions;
            });
        }
    };

    return (
       <div className="flex flex-col items-center justify-center h-[700px]">
  <div className="flex flex-col items-center relative h-[200px] transition-transform duration-100">
    {options.map((option, index) => (
      <motion.div
        key={option}
        className={`w-[200px] text-center cursor-pointer rounded-lg transition-opacity duration-500 font-mono ${
          index === defaultIndex
            ? "bg-yellow-200 text-gray-600 font-bold text-md py-3 shadow-md"
            : "text-gray-300 hover:text-gray-600"
        }`}
        onClick={() => handleOptionClick(index)}
        animate={{
          y: (index - defaultIndex) * 40,
          scale: index === defaultIndex ? 1.1 : 1,
          opacity: index < defaultIndex - 1 || index > defaultIndex + 1 ? 0 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 40,
        }}
      >
        {option}
      </motion.div>
    ))}
  </div>
</div>

    );
};

export default Scroll;
