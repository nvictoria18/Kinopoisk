import Navbar from "@/widgets/Navbar/ui/Navbar";
import Background from "@/shared/assets/background.png"
import Input from "@/shared/ui/Input/ui/Input";
import Select from "@/shared/ui/Select/Select";
import { Card } from '@/widgets/Card/index'
import cardsOfFilm from "./ui/cardsOfFilm";
import Search from "@/shared/assets/search-normal.svg"


const Home = () => {
    return (
        <div style={{
            backgroundImage: `url(${Background})`
        }} className="w-full relative z-0 bg-no-repeat bg-cover bg-[position:0_5%] pb-[156px]">
            <Navbar isPermission={false} />
            <div className="my-13 md:my-20 mx-auto w-full max-w-[700px] px-5 md:max-w-[75rem] md:px-0 space-y-6">
                <div className="space-y-4 max-w-[588px]">
                    <div className="heading-one text-[2.8rem] text-gray-50 md:text-heading-one ">
                        MaileHereko
                    </div>
                    <div className="font-poppins-regular text-sm md:text-base leading-6 tracking-normal text-gray-300">
                        List of movies and TV Shows, I, <span className="text-primary-300">Pramod Poudel</span> have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉
                    </div>
                </div>
                <Input icon={<Search className="min-w-5 min-h-5 md:w-6 md:h-6 text-gray-600" />} placeholder="Search Movies or TV Shows"></Input>
            </div>
            <div className="mx-auto w-full max-w-[700px] md:max-w-[75rem] md:px-0 px-5">

                <Select options={['All', 'Movies', 'TV Shows']} />
            </div>
            <div className=" mx-auto w-full max-w-[700px] md:px-0 px-6 text-gray-400 my-6 md:max-w-[75rem]">
                <span className="heading-three text-2xl md:text-heading-three">All</span> <span className="body-regular">(120)</span>
            </div>
            <div
                className="mx-auto w-full max-w-4xl md:px-0 px-10 md:max-w-[75rem] justify-center md:justify-start flex gap-x-6 gap-y-5 flex-shrink-0 flex-wrap"
            >
                {cardsOfFilm.map((card, index) => (
                    <Card
                        page=""
                        id={card.id}
                        key={card.name + index}
                        image={card.image}
                        variants={"normal"}
                        name={card.name}
                        rating={card.rating} />
                ))}
            </div>
        </div>)
}

export default Home;