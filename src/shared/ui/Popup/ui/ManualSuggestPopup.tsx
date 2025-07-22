import { MouseEventHandler, MutableRefObject, RefObject } from "react";
import Popup from "./Popup";
import { Input } from "../../Input";
import VideoPlay from "@/shared/assets/video-play.svg"
import Link from "@/shared/assets/link.svg"
import { Button } from "@/shared/ui/Button";

type ManualSuggestPopupProps = {
    isPopping: boolean;
    setIsPopping: MouseEventHandler<HTMLElement>;
    disabled: boolean;
    popupRef: RefObject<HTMLDivElement>;
}

const ManualSuggestPopup = ({
    popupRef,
    isPopping,
    setIsPopping,
    disabled,
}: ManualSuggestPopupProps) => {
    return <Popup
        popupRef={popupRef}
        isPopping={isPopping}
        setIsPopping={setIsPopping}
        children={
            <div className="flex flex-col gap-y-10 items-center">
                <div className="heading-four text-gray-100 text-2xl ">
                    Suggest something to watch
                </div>
                <div className="flex flex-col gap-y-4 shrink-0 w-full md:max-w-[400px]">
                    <Input
                        disabled={disabled}
                        placeholder="Title" icon={<VideoPlay
                            className="min-w-5 min-h-5 md:w-6 md:h-6 text-gray-600" />}
                        classNames="md:max-w-[400px]" />
                    <Input
                        disabled={disabled}
                        placeholder="Link (if available)"
                        icon={<Link className="min-w-5 min-h-5 md:w-6 md:h-6 text-gray-600" />}
                        classNames="md:max-w-[400px]"
                    />
                </div>
                <Button classNames="md:max-w-[400px] body-regular" content="Suggest" />
            </div>
        }
    />

}

export default ManualSuggestPopup;