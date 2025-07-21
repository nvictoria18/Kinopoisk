type ButtonProps = {
    text: string;
    classNames?: string;
    handleClick?: () => void;
}

const Button = ({
    text,
    classNames,
    handleClick
}: ButtonProps) => {
    return (
        <button className={` 
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
        `}
        onClick={handleClick}
        >
            {text}
        </button>)
}

export default Button;