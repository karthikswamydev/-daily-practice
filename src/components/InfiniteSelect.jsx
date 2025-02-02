import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css";

const initialOptions = [
  "Automotive",
  "Hospitality",
  "Retail",
  "Marketing",
  "Public Relations",
];

const InfiniteScroll = () => {
  const [options, setOptions] = useState(initialOptions);
  const [highlightedIndex, setHighlightedIndex] = useState(2);
  //   console.log(options, "options");
  console.log({ highlightedIndex });
  // Function to handle option click
  const handleOptionClick = (index) => {
    console.log({ index });
    const shift = index - highlightedIndex;
    console.log({ shift });

    if (shift !== 0) {
      setTimeout(() => {
        setOptions((prevOptions) => {
          let newOptions = [...prevOptions];
          console.log({ newOptions });

          // Rotate the array so the clicked option moves to the center
          if (shift > 0) {
            for (let i = 0; i < shift; i++) {
              console.log({ i });
              newOptions.push(newOptions.shift()); // Move first item to the end
            }
          } else {
            for (let i = 0; i < Math.abs(shift); i++) {
              newOptions.unshift(newOptions.pop()); // Move last item to the beginning
            }
          }

          return newOptions;
        });
      }, 300);
    }
  };

  return (
    <div className="scroll-container">
      <div className="scroll-wrapper">
        {options.map((option, index) => (
          <motion.div
            key={option}
            className={`option ${index === highlightedIndex ? "highlighted" : ""}`}
            onClick={() => handleOptionClick(index)}
            animate={{
              y: (index - highlightedIndex) * 30, 
              scale: index === highlightedIndex ? 1 : 1,
              opacity:
                index < highlightedIndex - 1 || index > highlightedIndex + 1
                  ? 0
                  : 1,
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

export default InfiniteScroll;