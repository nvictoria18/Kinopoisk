import { useState } from "react";

type SelectProps = {
    options: string[]
}

const Select = ({
    options
}: SelectProps) => {
    const [currentOption, setCurrentOption] = useState(options[0]);

    const handleChangeOption = (value: string) => {
        setCurrentOption(value)
    }

    return (
        <div className="relative flex bg-black-20 w-[368px] p-2 rounded-[0.5rem] box-content">
            {options.map((option) => (
                <div
                    className="text-gray-300 px-8 py-2 rounded-[0.5rem] link-regular"
                    onClick={() => handleChangeOption(option)}
                >
                    {option}
                </div>
            ))}
            <div className="absolute top-0 left-0 h-full bg-primary-300 text-primary-50 rounded-[0.5rem]"></div>
        </div>)
}

export default Select;