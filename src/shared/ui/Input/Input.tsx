import Search from "@/shared/assets/search-normal.svg"

type InputProps = {
    placeholder: string;
}

const Input  = ({
    placeholder,
}: InputProps) => {
    return (
        <div className="flex gap-4 border-gray-700 border-[1px] px-2 md:px-4 md:py-2 py-3 items-center rounded-[0.75rem] max-w-75 md:max-w-[344px] bg-[#0E1D2D]">
            <Search className="min-w-5 min-h-5 md:w-6 md:h-6 text-gray-600" />
            <input className=" min-w-48 md:min-w-[272px] text-gray-600 outline-none caption box-content text-sm md:text-sm py-3 overflow-visible placeholder-gray-600"placeholder={placeholder} />
        </div>
    )
}

export default Input;