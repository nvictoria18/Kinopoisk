import { Navbar } from "@/widgets/Navbar";
import Background from "@/shared/assets/background.png"
import Input from "@/shared/ui/Input/Input";
import Button from "@/shared/ui/Button/Button";
import cardsOfFilm from "./ui/cardsOfFilm";
import { Card } from "@/widgets/Card";
import CardSkeleton from "@/widgets/Card/ui/CardSkeleton";

const Suggest = () => {
    return (
        <div style={{
            backgroundImage: `url(${Background})`
        }} className="w-full relative z-0 bg-no-repeat bg-cover bg-[position:0_5%] pb-14">
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
                    className="md:px-0 px-10 justify-center md:justify-start flex gap-x-6 gap-y-8 flex-shrink-0 flex-wrap w-full max-w-4xl mx-auto md:max-w-[75rem]"
                >
                    {cardsOfFilm.map((card, index) => (
                        <CardSkeleton
                        // page="/movies"
                        // id={card.id}
                        // key={card.name + index}
                        // image={card.image}
                        // variants={""}
                        // name={card.name}
                        // rating={card.rating}
                        />
                    ))}
                </div>
        </div>
    )
}

export default Suggest;