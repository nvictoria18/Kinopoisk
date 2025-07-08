import { MouseEventHandler } from "react";
import Popup from "./Popup";

type ManualSuggestPopupProps = {
    isPopping: boolean;
    setIsPopping: MouseEventHandler<HTMLElement>;
}

const ManualSuggestPopup = ({
    isPopping,
    setIsPopping,
}:ManualSuggestPopupProps) => {
    return <Popup
        isPopping={isPopping}
        setIsPopping={setIsPopping}
        children={undefined}
    />

}

export default ManualSuggestPopup;