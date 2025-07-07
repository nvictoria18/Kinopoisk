import Search from "@/shared/assets/search-normal.svg"
import { useState } from "react";

type InputProps = {
    placeholder: string;
    classNames?: string;
}

const Input = ({
    classNames,
    placeholder,
}: InputProps) => {
    const [value, setValue] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        console.log(value)
    }

    return (
        <div className={`relative flex gap-4 border-gray-700 h-16 border-[1px] px-2 md:px-4 md:py-2 py-3 w-full items-center rounded-[0.75rem] ${classNames ? classNames : 'max-w-75 md:max-w-[344px]'} bg-[#0E1D2D]`}>
            <Search className="min-w-5 min-h-5 md:w-6 md:h-6 text-gray-600" />
            <input id="input" autoComplete="off" className={`absolute min-w-48 md:min-w-[272px] outline-none box-content overflow-visible
             caption text-xs md:text-base left-10 md:left-14 bg-transparent peer text-gray-400 transition-all ease-in-out duration-75
            md:top-2/4 top-[57%] body-regular
            `} onChange={(event) => handleChange(event)}/>
            <label htmlFor="input" className={`absolute left-10 md:left-14 -translate-y-2/4 caption text-gray-600 text-xs md:text-sm
            peer-focus:top-1/3 ${value ? 'top-1/3' : 'top-2/4'} transition-all text-sm ease-in-out duration-75
            `}>{placeholder}</label>
        </div>
    )
}

export default Input;