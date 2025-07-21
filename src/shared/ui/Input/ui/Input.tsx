import { HTMLInputTypeAttribute, useState } from "react";
import Visible from '@/shared/assets/eye.svg';
import Unisible from '@/shared/assets/eye-slash.svg'

type InputProps = {
    placeholder: string;
    classNames?: string;
    icon?: JSX.Element;
    disabled?: boolean;
    type?: HTMLInputTypeAttribute;
    visibleText?: boolean;
    visible?: boolean
    setVisible?: () => void;
    inputWidth?: string;
}

const Input = ({
    classNames,
    placeholder,
    icon,
    disabled,
    type,
    visible,
    setVisible,
    visibleText,
    inputWidth
}: InputProps) => {
    const [value, setValue] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <div
            className={`relative flex gap-4 border-gray-700 h-16 border-[1px] px-2 md:px-4 md:py-2 py-3 w-full items-center rounded-[0.75rem] ${classNames ? classNames : 'max-w-75 md:max-w-[344px]'} bg-[#0E1D2D]`}>
            {icon}
            <input type={type ? type : 'text'} id={`input-${placeholder.toLowerCase()}`} disabled={disabled} autoComplete="off" className={`absolute ${inputWidth ? inputWidth : 'max-w-48 md:max-w-[272px]'} w-full outline-none box-content overflow-visible
             caption text-xs md:text-base left-10 md:left-14 bg-transparent peer text-gray-400 transition-all ease-in-out duration-75
            md:top-2/4 top-2/4 body-regular
            `} onChange={(event) => handleChange(event)} />
            <label htmlFor={`input-${placeholder.toLowerCase()}`} className={`absolute left-10 md:left-14 -translate-y-2/4 caption text-gray-600 text-xs md:text-sm
            peer-focus:top-1/3 ${value ? 'top-1/3' : 'top-2/4'} transition-all text-sm ease-in-out duration-75
            `}>{placeholder}</label>
            {visibleText ? (
                <div
                    className="absolute right-4 top-2/4 -translate-y-2/4"
                    onClick={setVisible}
                >
                    {visible ? <Visible className="w-6 h-6" /> : <Unisible className="w-6 h-6" />}
                </div>
            ) : null}
        </div>
    )
}

export default Input;