import Search from "@/shared/assets/search-normal.svg"

type InputProps = {
    placeholder: string;
}

const Input  = ({
    placeholder,
}: InputProps) => {
    return (
        <div className="flex gap-4 border-gray-700 border-[1px] px-4 py-3 items-center rounded-[0.75rem] max-w-[344px] bg-[#0E1D2D]">
            <Search className="w-6 h-6 text-gray-600" />
            <input className="min-w-[272px] text-gray-600 outline-none caption py-3 placeholder-gray-600"placeholder={placeholder} />
        </div>
    )
}

export default Input;