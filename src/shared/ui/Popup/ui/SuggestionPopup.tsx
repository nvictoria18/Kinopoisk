import { MouseEventHandler, RefObject } from "react";
import Popup from "./Popup";
import ThankYou from "@/shared/assets/thankyou.svg"

type SuggestionPopupProps = {
    popupRef: RefObject<HTMLDivElement>;
    isPopping: boolean;
    setIsPopping: MouseEventHandler<HTMLElement>;
}

const SuggestionPopup = ({
    popupRef,
    isPopping,
    setIsPopping,
}: SuggestionPopupProps) => {
    return <Popup
        popupRef={popupRef}
        isPopping={isPopping}
        setIsPopping={setIsPopping}
        children={

            <div
                className="flex
                    w-full
                    justify-center
                    items-center
                    gap-y-6
                    flex-col
                "
            >
                <ThankYou
                    className="max-w-15 max-h-15 w-full h-full md:max-w-30 md:max-h-30"
                />
                <div
                    className="heading-four text-gray-50 text-xl md:text-2xl"
                >
                    Thank you for your suggestion
                </div>
                <div
                    className="body-regular text-sm md:text-base text-gray-400 text-center"
                >
                    Your suggestion has been succesfully added to my watchlist, I will manage sometime to watch your suggestion. ❤
                </div>

            </div>
        }
    />

}

export default SuggestionPopup;