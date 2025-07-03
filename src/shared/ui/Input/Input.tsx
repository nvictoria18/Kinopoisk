type InputProps = {
    placeholder: string;
}

const Input  = ({
    placeholder,
}: InputProps) => {
    return (
        <div className="">
            <input placeholder={placeholder}></input>
        </div>
    )
}

export default Input;