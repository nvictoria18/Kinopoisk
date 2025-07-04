import Navbar from "@/widgets/Navbar/ui/Navbar";
import Background from "@/shared/assets/background.png"
import Input from "@/shared/ui/Input/Input";
import Select from "@/shared/ui/Select/Select";

type HomeProps = {
    count: number;
}

const Home = () => {
    return (
        <div style={{
            backgroundImage: `url(${Background})`
        }} className="w-full bg-no-repeat bg-cover bg-[position:0_10%]">
            <Navbar isPermission={false} />
            <div className="my-20 mx-120 space-y-6">
                <div className="space-y-4 max-w-[588px]">
                    <div className="text-gray-50 heading-one">
                        MaileHereko
                    </div>
                    <div className="font-poppins-regular text-[1rem] leading-6 tracking-normal text-gray-300">
                        List of movies and TV Shows, I, <span className="text-primary-300">Pramod Poudel</span> have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉
                    </div>
                </div>
                <Input placeholder="Search Movies or TV Shows"></Input>
            </div>
            <div className="mx-120">

                <Select options={['All', 'Movies', 'TV Shows']} />
            </div>
        </div>)
}

export default Home;