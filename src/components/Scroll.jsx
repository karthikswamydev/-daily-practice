
import { useState } from "react"
import { motion } from "framer-motion";
const optionsList = ["Automotive",
    "Hospitality",
    "Retail",
    "Marketing",
    "Public Relations",
]

const Scroll = () => {
    const [options, setOptions] = useState(optionsList)
    const [defaultIndex, setDefaultIndex] = useState(2)

    const handleOptionClick = (index) => {
        const shift = index - defaultIndex
        if (shift !== 0) {
            setOptions((prevOptions) => {
                const newOptions = [...prevOptions]
                if (shift > 0) {
                    for (let i = 0; i < shift; i++) {
                        newOptions.push(newOptions.shift())
                    }
                } else {
                    for (let i = 0; i < Math.abs(shift); i++) {
                        newOptions.unshift(newOptions.pop())
                    }
                }
                return newOptions
            })
        }

    }
    return (
        <div className="scroll-container">
            <div className="scroll-wrapper">
                {options?.map((option, index) => {
                    return (
                        <motion.div key={option} className={`option ${index === defaultIndex ? "highlighted" : ""}`} onClick={() => handleOptionClick(index)} animate={{
              y: (index - defaultIndex) * 10,
              scale: index === defaultIndex ? 1 : 1,
              opacity:
                  index < defaultIndex - 1 || index > defaultIndex + 1
                  ? 0
                  : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 40,
            }}>
                            {option}
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}

export default Scroll