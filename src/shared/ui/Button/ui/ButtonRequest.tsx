import { useEffect, useState } from "react";
import Button from "./Button";
import Spinner from "@/shared/assets/spinner.svg"

type ButtonRequestProps = {
    content: string;
    classNames?: string;
    handleClick?: () => void;
}

const ButtonRequest = ({
    content,
    classNames,
    handleClick
}: ButtonRequestProps) => {
    const [changedContent, setChangedContent] = useState(true);

    const loadingData = () => {
        setChangedContent(!changedContent);
        return handleClick ? handleClick() : null;
    }
    return (
        <Button
            content={changedContent ? content : <Spinner className="w-8 h-full" />}
            classNames={`${classNames ? classNames : 'max-w-[121px] body-regular'} flex justify-center items-center`}
            handleClick={loadingData}
        />)
}

export default ButtonRequest;