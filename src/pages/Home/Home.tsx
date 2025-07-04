import Navbar from "@/widgets/Navbar/ui/Navbar";
import Background from "@/shared/assets/background.png"
import Input from "@/shared/ui/Input/Input";
import Select from "@/shared/ui/Select/Select";
import cartsOfFilm from "./ui/cardsOfFilm";
import { Card } from '@/widgets/Card/index'
import cardsOfFilm from "./ui/cardsOfFilm";

type HomeProps = {
    count: number;
}

const Home = () => {
    return (
        <div style={{
            backgroundImage: `url(${Background})`
        }} className="w-full bg-no-repeat bg-cover bg-[position:0_5%] pb-[156px]">
            <Navbar isPermission={false} />
            <div className="my-20 mx-auto max-w-[75rem] space-y-6">
                <div className="space-y-4 max-w-[588px]">
                    <div className="heading-one mobile:text-sm laptop: text-gray-50">
                        MaileHereko
                    </div>
                    <div className="font-poppins-regular text-[1rem] leading-6 tracking-normal text-gray-300">
                        List of movies and TV Shows, I, <span className="text-primary-300">Pramod Poudel</span> have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉
                    </div>
                </div>
                <Input placeholder="Search Movies or TV Shows"></Input>
            </div>
            <div className="mx-auto max-w-[75rem]">

                <Select options={['All', 'Movies', 'TV Shows' ]} />
            </div>
            <div className="text-gray-400 my-6 mx-auto max-w-[75rem]">
                <span className="heading-three">All</span> <span className="body-regular">(120)</span>
            </div>
            <div
                className="mx-auto max-w-[75rem] flex gap-x-6 gap-y-5 flex-shrink-0 flex-wrap"
            >
                {cardsOfFilm.map((card, index) => (
                    <Card
                    key={card.name + index}
                    image={card.image}
                    variants={""}
                    name={card.name}
                    rating={card.rating} />
                ))}
            </div>
        </div>)
}

export default Home;