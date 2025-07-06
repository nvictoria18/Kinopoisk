import { Navbar } from "@/widgets/Navbar";
import Background from "@/shared/assets/background.png"
import { Link, useParams } from "react-router-dom";
import bg from "@/shared/assets/detail/1.png";
import Poster from "@/shared/assets/detail/2.png"
import Star from '@/shared/assets/star.svg'


type DetailProps = {
    name: string | undefined;
}

const Detail = ({
    name,
}: DetailProps) => {
    const { id } = useParams();

    return (<div style={{
        backgroundImage: `url(${Background})`
    }} className="w-full relative z-0 bg-no-repeat bg-cover bg-[position:0_5%] pb-[156px]">
        <Navbar isPermission={false} />
        <div className="relative w-full mx-auto max-w-[700px] md:max-w-[75rem] mt-10 md:px-0 px-5">
            <div className="absolute  md:w-full h-full max-w-[660px] box-border md:mx-0 mx-5 md:max-w-[75rem] top-0 left-0 bg-linear-to-t from-secondary-700 rounded-2xl to-primary-700 opacity-40 md:rounded-[40px]" />
            <img src={bg} className="h-[30rem] max-w-[700px] w-full md:max-w-[75rem] md:rounded-[40px] object-cover rounded-2xl" />
            <div className="absolute left-2/4 w-3/4 md:w-full -translate-x-1/2 md:translate-0 md:left-20 top-102 bg-[#20283ECC] backdrop-blur-xl p-10 md:max-w-[35rem] rounded-3xl space-y-2">
                <div className="text-primary-200 body-extra-small flex gap-2">
                    <Link to="/">MaileHereko</Link> <span className="text-gray-400">/</span> <Link to="/movies">Movies</Link>
                </div>
                <div className="text-gray-50 heading-three text-[2rem]">{name ?? 'Avengers: Endgame'}</div>
            </div>
        </div>
        <div className="w-full mx-auto max-w-[700px] md:max-w-[65rem] flex gap-20 mt-[9.5rem] flex-wrap items-center md:items-start md:flex-nowrap">
            <div className="md:shrink-0 shrink-1">
                <img className="rounded-3xl" src={Poster} />
            </div>
            <div
                className="flex flex-col gap-6"
            >
                <div className="heading-four text-gray-50">Part of the journey is the end.</div>
                <div
                    className="text-gray-300 body-large"
                >
                    After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.
                </div>
                <div className="bg-black-65 flex gap-1 px-2 py-1 text-warning-500 body-regular text-base items-center w-[59px] rounded-lg">
                    <Star />
                    8.3
                </div>
                <div className="space-y-2">
                    <div className="text-gray-400 body-regular">Type</div>
                    <div className="text-gray-100 body-large">Movie</div>
                </div>
                <div className="space-y-2">
                    <div className="text-gray-400 body-regular">Release Date:</div>
                    <div className="text-gray-100 body-large">2019-04-24</div>
                </div>
                <div className="space-y-2">
                    <div className="text-gray-400 body-regular">Run time:</div>
                    <div className="text-gray-100 body-large">181 min</div>
                </div>
                <div className="space-y-2">
                    <div className="text-gray-400 body-regular">Genres</div>
                    <div className="text-gray-100 body-large flex gap-2">
                        <span>Adventure,</span>
                        <span>Science Fiction,</span>
                        <span>Action</span>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}

export default Detail;