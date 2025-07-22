import { Navbar } from "@/widgets/Navbar";
import Background from "@/shared/assets/background.png"
import Input from "@/shared/ui/Input/ui/Input";
import { ButtonRequest } from "@/shared/ui/Button";
import cardsOfFilm from "./ui/cardsOfFilm";
import { Card } from "@/widgets/Card";
import CardSkeleton from "@/widgets/Card/ui/CardSkeleton";
import { MouseEventHandler, Suspense, useRef, useState } from "react";
import { ManualSuggestPopup, SuggestionPopup } from "@/shared/ui/Popup";
import Search from "@/shared/assets/search-normal.svg"
import { useOutsideClick } from "@/shared/hooks/useOutsideClick";


const Suggest = () => {
    const [isSuggest, setIsSuggest] = useState(false)
    const [isSuggestManually, setIsSuggestManually] = useState(false);
    const suggestMannualyRef = useOutsideClick(() => setIsSuggestManually(false));
    const suggestRef = useOutsideClick(() => () => setIsSuggest(false));

    const handleOpenModalSuggestManually = () => {
        console.log('click on modal')
        setIsSuggestManually(!isSuggestManually)
    }
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
                    <Input disabled={isSuggestManually} icon={<Search className="min-w-5 min-h-5 md:w-6 md:h-6 text-gray-600" />} classNames="md:max-w-[384px]" placeholder="Search Movies or TV Shows" />
                    <ButtonRequest content="Search" />
                </div>
            </div>
            {
                cardsOfFilm.length === 0 ?
                    <div className="mt-24 text-center text-gray-50 heading-two text-5xl mb-4">
                        Sorry, No results found
                    </div>
                    :
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
                            popupRef={suggestRef}
                            setIsPopping={() => setIsSuggest(false)}
                            isPopping={isSuggest}
                        />
                    </div>}
            <div className={`
                    w-full
                    max-w-[700px]
                    md:max-w-[1200px]
                    mx-auto
                    flex
                    flex-col
                    items-center
                    justify-center
                    
                    ${cardsOfFilm.length === 0 ? 'gap-y-10' : 'gap-y-6'}
                `}>
                <div
                    className="text-gray-400
                        text-xl
                        text-center
                        body-large
                        max-w-[640px]
                        w-full
                        "
                >{cardsOfFilm.length === 0 ? 'There are no movies or TV shows matching your search terms. You can suggest me manually' : "Didin’t find the one you looking for?"}</div>
                <ButtonRequest
                    classNames={`max-w-[189px] body-small relative ${cardsOfFilm.length === 0 ? 'left-0' : 'left-4'}`}
                    content={"Suggest Manually"}
                    handleClick={handleOpenModalSuggestManually} />
                <ManualSuggestPopup
                    popupRef={suggestMannualyRef}
                    setIsPopping={() => setIsSuggestManually(false)}
                    isPopping={isSuggestManually}
                    disabled={!isSuggestManually}
                />
            </div>
        </div>
    )
}

export default Suggest;