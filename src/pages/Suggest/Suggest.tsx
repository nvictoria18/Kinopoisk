import { Navbar } from "@/widgets/Navbar";
import Background from "@/shared/assets/background.png"
import Input from "@/shared/ui/Input/Input";
import Button from "@/shared/ui/Button/Button";
import cardsOfFilm from "./ui/cardsOfFilm";
import { Card } from "@/widgets/Card";
import CardSkeleton from "@/widgets/Card/ui/CardSkeleton";
import { Suspense, useState } from "react";
import { SuggestionPopup } from "@/shared/ui/Popup";

const Suggest = () => {
    const [isSuggest, setIsSuggest] = useState(false)

    return (
        <div style={{
            backgroundImage: `url(${Background})`
        }} className="w-full relative z-0 bg-no-repeat bg-cover bg-[position:0_5%] pb-40">
            <Navbar isPermission={false} />
            <div className="my-13 md:mt-20 mx-auto w-full max-w-[700px] px-5 md:max-w-[75rem] md:px-0 space-y-6">
                <div className="space-y-4 max-w-[588px]">
                    <div className="heading-one text-[2.8rem] text-gray-50 md:text-heading-one ">
                        Suggest me
                    </div>
                    <div className="font-poppins-regular text-sm md:text-base leading-6 tracking-normal text-gray-300">
                        I will really appericiate it if you take time to suggest me something good to watch.
                    </div>
                </div>
                <div className="gap-2 flex mb-20">
                    <Input classNames="md:max-w-[384px]" placeholder="Search Movies or TV Shows" />
                    <Button text="Search" />
                </div>
            </div>
            <div
                className="
                    md:px-0 
                    px-10 
                    justify-center 
                    md:justify-start 
                    flex 
                    gap-x-6 
                    gap-y-4 
                    flex-shrink-0 
                    flex-wrap 
                    w-full 
                    max-w-4xl 
                    mx-auto 
                    md:max-w-[75rem]
                    mb-18
                    "
            >
                {cardsOfFilm.map((card, index) => (
                    <Suspense fallback={<CardSkeleton />}>
                        <Card
                            image={card.image}
                            variants={card.variants}
                            name={card.name}
                            rating={card.rating}
                            id={card.id}
                            page={"/suggest-me"}
                            key={index + card.name}
                            handleOpenPopup={() => setIsSuggest(!isSuggest)}
                        /></Suspense>
                ))}
                <SuggestionPopup
                    setIsPopping={() => setIsSuggest(false)}
                    isPopping={isSuggest}
                />

            </div>
            <div className="
                    w-full
                    max-w-[700px]
                    md:max-w-[1200px]
                    mx-auto
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-y-6
                    b
                ">
                <div
                    className="text-gray-400
                        text-xl
                        text-center
                        body-large
                        "
                >Didin’t find the one you looking for?</div>
                <Button
                    classNames="max-w-[189px] body-small relative left-4"
                    text={"Suggest Manually"} />
            </div>
        </div>
    )
}

export default Suggest;