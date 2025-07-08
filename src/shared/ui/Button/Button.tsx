type ButtonProps = {
    text: string;
    classNames?: string;
}

const Button = ({
    text,
    classNames
}: ButtonProps) => {
    return (
        <button className={`
        max-w-[121px] 
        w-full 
        body-regular 
        text-base
        text-white-100
        bg-primary-400
        outline-none
        px-8
        py-4
        rounded-xl
        ${classNames ? `${classNames}` : 'max-w-[121px] body-regular'}
        `}>
            {text}
        </button>)
}

export default Button;