import { MouseEventHandler } from "react";
import Popup from "./Popup";
import ThankYou from "@/shared/assets/thankyou.svg"

type SuggestionPopupProps = {
    isPopping: boolean;
    setIsPopping: MouseEventHandler<HTMLElement>;
}

const SuggestionPopup = ({
    isPopping,
    setIsPopping,
}: SuggestionPopupProps) => {
    return <Popup
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
                    className="max-w-30 max-h-30 w-full h-full"
                />
                <div
                    className="heading-four text-gray-50 text-2xl"
                >
                    Thank you for your suggestion
                </div>
                <div
                    className="body-regular text-base text-gray-400 text-center"
                >
                    Your suggestion has been succesfully added to my watchlist, I will manage sometime to watch your suggestion. ❤
                </div>

            </div>
        }
    />

}

export default SuggestionPopup;