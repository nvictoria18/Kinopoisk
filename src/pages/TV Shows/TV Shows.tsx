import { Navbar } from "@/widgets/Navbar";
import Background from "@/shared/assets/background.png"
import cardsOfFilm from "./ui/cardsOfFilm";
import { Card } from "@/widgets/Card";
import Input from "@/shared/ui/Input/ui/Input";
import Search from "@/shared/assets/search-normal.svg"


const TVShows = () => {

    return (
        <div style={{
            backgroundImage: `url(${Background})`
        }} className="w-full relative z-0 bg-no-repeat bg-cover bg-[position:0_5%] pb-[156px]">
            <Navbar isPermission={false} />
            <div className="pt-16 pb-12 max-w-[700px] px-5 md:px-0 w-full mx-auto md:max-w-[75rem]">
                <div className="mb-6">
                    <div className="body-extra-small text-primary-200">MaileHereko</div>
                    <div className="text-[2.8rem] heading-one md:text-heading-one text-gray-50">
                        TV Shows
                    </div>
                </div>
                <div>
                    <Input icon={<Search className="min-w-5 min-h-5 md:w-6 md:h-6 text-gray-600" />} placeholder="Search Movies or TV Shows" />
                </div>

            </div>
            <div className="w-full max-w-4xl mx-auto md:max-w-[75rem] space-y-6">
                <div className="body-regular px-5 md:px-0 text-gray-400">120 items</div>
                <div
                    className="md:px-0 px-10 justify-center md:justify-start flex gap-x-6 gap-y-5 flex-shrink-0 flex-wrap"
                >
                    {cardsOfFilm.map((card, index) => (
                        <Card
                            page="/tv-shows"
                            id={card.id}
                            key={card.name + index}
                            image={card.image}
                            variants={"normal"}
                            name={card.name}
                            rating={card.rating} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TVShows;