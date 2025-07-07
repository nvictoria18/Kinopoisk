import { Navbar } from "@/widgets/Navbar";
import Background from "@/shared/assets/background.png"
import { Link } from "react-router-dom";

import Star from '@/shared/assets/star.svg'
import { typePage } from "./ui/typePage";

type DetailProps = {
    page?: 'movies' | 'tv-shows';
}

const Detail = ({
    page
}: DetailProps) => {

    return (<div style={{
        backgroundImage: `url(${Background})`
    }} className="w-full relative z-0 bg-no-repeat bg-cover bg-[position:0_5%] pb-[156px]">
        <Navbar isPermission={false} />
        <div className="md:px-0 px-5">
            <div className="relative w-full mx-auto max-w-[700px] md:max-w-[75rem] mt-10">
                <div className="absolute w-full h-full box-border md:max-w-[75rem] top-0 left-0 bg-linear-to-t from-secondary-700 rounded-2xl to-primary-700 opacity-40 md:rounded-[40px]" />
                <img src={page ? typePage[page].banner : typePage["tv-shows"].banner} className="h-[30rem] max-w-[700px] w-full md:max-w-[75rem] md:rounded-[40px] object-cover rounded-2xl" />
                <div className="absolute left-2/4 w-3/4 md:w-full -translate-x-1/2 md:translate-0 md:left-20 top-102 bg-[#20283ECC] backdrop-blur-xl p-10 md:max-w-[35rem] rounded-3xl space-y-2">
                    <div className="text-primary-200 body-extra-small flex gap-2">
                        <Link to="/">MaileHereko</Link> <span className="text-gray-400">/</span> <Link to={`/${page}`}>{page === 'movies' ? 'Movies' : 'TV Shows'}</Link>
                    </div>
                    <div className="text-gray-50 heading-three text-2xl md:text-[2rem]">{page ? typePage[page].name : typePage["tv-shows"].name}</div>
                </div>
            </div>
        </div>
        <div className="md:px-0 px-5 w-full mx-auto max-w-[75rem] max-[700px]:flex-col max-[700px]:items-center md:max-w-[65rem] flex gap-10 md:gap-20 mt-[9.5rem] flex-row items-start md:flex-nowrap">
            <div className="shrink-0 w-full max-w-[20rem] md:max-w-[30rem]">
                <img className="rounded-3xl" src={page ? typePage[page].poster : typePage["tv-shows"].poster} />
            </div>
            <div
                className="flex flex-col gap-6"
            >
                <div className="heading-four md:text-2xl text-xl text-gray-50">{page ? typePage[page].quote : typePage["tv-shows"].quote}</div>
                <div
                    className="text-gray-300 body-large text-base md:text-xl"
                >
                    {page ? typePage[page].description : typePage["tv-shows"].description}
                </div>
                <div className="bg-black-65 flex gap-1 px-2 py-1 text-warning-500 body-regular text-sm md:text-base items-center w-[59px] rounded-lg">
                    <Star />
                    {page ? typePage[page].marks : typePage["tv-shows"].marks}
                </div>
                {
                    page ? (
                        page === 'movies' ?
                            (<>
                                {
                                    Object.values(typePage[page]).slice(6, 9).map((el) => (
                                        <div className="space-y-2">
                                            <div className="text-gray-400 body-regular text-sm md:text-base">{Array.isArray(el) ? el[0] : ''}</div>
                                            <div className="text-gray-100 body-large text-base md:text-xl">{Array.isArray(el) ? el[1] : ''}</div>
                                        </div>))
                                }
                                <div className="space-y-2">
                                    <div className="text-gray-400 body-regular text-sm md:text-base">Genres</div>
                                    <div className="text-gray-100 body-large text-base md:text-xl flex gap-2">
                                        <span>Adventure,</span>
                                        <span>Science Fiction,</span>
                                        <span>Action</span>
                                    </div>
                                </div>

                            </>


                            ) : (
                                <>
                                    <div className="grid grid-cols-2 gap-6">
                                        {
                                            Object.values(typePage[page]).slice(6, 13).map((el) => (
                                                <div className="space-y-2 max-w-[7.25rem] w-full md:max-w-[14.25rem]">
                                                    <div className="text-gray-400 body-regular text-sm md:text-base">{Array.isArray(el) ? el[0] : ''}</div>
                                                    <div className="text-gray-100 body-large text-base md:text-xl">{Array.isArray(el) ? el[1] : ''}</div>
                                                </div>))

                                        }
                                    </div>
                                    {
                                        Object.values(typePage[page]).slice(13).map((el) => (
                                            <div className="space-y-2">
                                                <div className="text-gray-400 body-regular text-sm md:text-base">{Array.isArray(el) ? el[0] : ''}</div>
                                                <div className="text-gray-100 body-large text-base md:text-xl">{Array.isArray(el) ? el[1] : ''}</div>
                                            </div>))
                                    }

                                </>
                            )

                    ) : (
                        <>
                            <div className="grid grid-cols-2 gap-6">
                                {
                                    Object.values(typePage["tv-shows"]).slice(6, 13).map((el) => (
                                        <div className="space-y-2 max-w-[7.25rem] w-full md:max-w-[14.25rem]">
                                            <div className="text-gray-400 body-regular text-sm md:text-base">{Array.isArray(el) ? el[0] : ''}</div>
                                            <div className="text-gray-100 body-large text-base md:text-xl">{Array.isArray(el) ? el[1] : ''}</div>
                                        </div>))

                                }
                            </div>
                            {
                                Object.values(typePage["tv-shows"]).slice(13).map((el) => (
                                    <div className="space-y-2">
                                        <div className="text-gray-400 body-regular text-sm md:text-base">{Array.isArray(el) ? el[0] : ''}</div>
                                        <div className="text-gray-100 body-large text-base md:text-xl">{Array.isArray(el) ? el[1] : ''}</div>
                                    </div>))
                            }

                        </>
                    )
                }

            </div>
        </div>
    </div>)
}

export default Detail;