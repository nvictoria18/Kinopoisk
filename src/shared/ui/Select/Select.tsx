import { useEffect, useLayoutEffect, useRef, useState } from "react";

type SelectProps = {
    options: string[]
}

const Select = ({
    options
}: SelectProps) => {
    const [currentOption, setCurrentOption] = useState(0);
    const ref = useRef(null);
    const [x, setX] = useState(0);
    const [widthElements, setWidthElements] = useState([0])
    const currentWidth = widthElements[currentOption + 1] ?? 0;
    const [loadFont, setLoadFont] = useState(false);

    const handleChangeOption = (index: number) => {
        setCurrentOption((prev) => prev = index)
        setX(widthElements.slice(0, index + 1).reduce((acc, el) => acc + el))
    }

    useLayoutEffect(() => {

        if (ref?.current?.children) {
            const widths = [...ref?.current?.children].map((value: HTMLElement) => {
                return value.offsetWidth
            })
            setWidthElements([0, ...widths])
        }

    }, [])

    useEffect(() => {
        if (document.fonts) {
            document.fonts.load("16px Poppins-SemiBold").then(function () {
                setLoadFont(true)
            });
        }
    }, [])

    return (
        <div

            className="relative bg-black-20 max-w-80 min-w-52 md:max-w-[368px] h-14 p-2 rounded-[0.5rem]">
            <div ref={ref} className="absolute flex z-1">
                {options.map((option, index) => (
                    <div

                        key={index + option}
                        className={`relative ${currentOption === index ? 'text-primary-50' : 'text-gray-300'} 
                        px-5 md:px-8 py-2 rounded-[0.5rem] md:text-base transition-all duration-200 ease-in-out
                            text-sm text-nowrap
                        `}
                        onClick={() => handleChangeOption(index)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            {loadFont ?
                (<div className="relative w-full h-full overflow-hidden">
                    <div
                        style={{
                            width: currentWidth + 'px',
                            transform: `translateX(${x}px)`
                        }}
                        className={`absolute top-0 left-0 h-10 bg-primary-300 text-primary-50 rounded-[0.5rem]
                        transition-all ease-in-out duration-200
                    `} />
                </div>)
                : <></>}

        </div>)
}

export default Select;