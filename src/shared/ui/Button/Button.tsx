type ButtonProps = {
    text: string;
}

const Button = ({
    text
}: ButtonProps) => {
    return (
        <button className="
        max-w-[121px] 
        w-full 
        body-regular 
        text-base
        text-white-100
        bg-primary-400
        outline-none
        px-8
        py-4
        rounded-xl">
            {text}
        </button>)
}

export default Button;