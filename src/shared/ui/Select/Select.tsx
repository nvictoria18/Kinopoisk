import { useEffect, useRef, useState } from "react";

type SelectProps = {
    options: string[]
}

const Select = ({
    options
}: SelectProps) => {
    const [currentOption, setCurrentOption] = useState(0);
    const ref = useRef(null);
    const currentWidth: number = ref?.current?.children[currentOption].offsetWidth ?? 85;
    const [x, setX] = useState(0);
    const widthElements = [0]

    const handleChangeOption = (index: number) => {
        setCurrentOption((prev) => prev = index)
        setX((prev) => {
            return widthElements.slice(0, index + 1).reduce((acc, el) => acc + el)
        })
    }
    
    useEffect(() => {

        if (ref?.current?.children) {
            [...ref?.current?.children].forEach((value: HTMLElement) => {
                widthElements.push(value.offsetWidth)
            })

        }
    }, [widthElements])
    

    return (
        <div className="relative bg-black-20 max-w-80 md:max-w-[368px] h-14 p-2 rounded-[0.5rem]">
            <div ref={ref} className="absolute flex z-1">
                {options.map((option, index) => (
                    <div
                        key={index + option}
                        className={`relative ${currentOption === index ? 'text-primary-50' : 'text-gray-300'} 
                        px-8 py-2 rounded-[0.5rem] link-regular text-xs md:text-base transition-all duration-200 ease-in-out
                        
                        `}
                        onClick={() => handleChangeOption(index)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            <div className="relative w-full h-full overflow-hidden ">
                <div
                    style={{
                        width: currentWidth + 'px',
                        transform: `translateX(${x}px)`
                    }}
                    className={`absolute top-0 left-0 h-10 bg-primary-300 text-primary-50 rounded-[0.5rem]
                transition-all ease-in-out duration-200
            `} />

            </div>

        </div>)
}

export default Select;