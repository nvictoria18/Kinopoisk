import Background from "@/shared/assets/background.png"
import quickLinks from "@/shared/const/quickLinks"
import suggestion from "@/shared/const/suggestion"
import { Badge, BadgeSuggestion } from "@/shared/ui/Badge"
import { Navbar } from "@/widgets/Navbar"
import { Link, Outlet } from "react-router-dom"


const Dashboard = () => {
    return (
        <div style={{
            backgroundImage: `url(${Background})`
        }} className="w-full relative z-0 bg-no-repeat bg-cover bg-[position:0_5%] pb-36">
            <Navbar isPermission={true} />
            <div className="flex flex-col gap-y-20 m-auto w-full md:max-w-[1200px] min-[768px]:max-w-[700px] max-w-[300px] pt-10 md:pt-20">
                <div className="flex flex-col gap-y-10">
                    <div className="heading-two text-4xl md:text-5xl text-gray-50">
                        Welcome
                    </div>
                    <div className="flex min-[768px]:flex-row flex-col md:flex-row gap-6">
                        {suggestion.map((item) => (<BadgeSuggestion classNames={""}>
                            <div className="flex flex-col items-center gap-y-2">
                                <div className="heading-three text-heading-three text-gray-50">
                                    {item.quantity}
                                </div>
                                <div className="body-regular text-gray-400 text-base text-center">
                                    {item.text}
                                </div>
                            </div>
                        </BadgeSuggestion>))}
                    </div>

                </div>

                <div className="flex flex-col gap-y-10">
                    <div className="text-heading-five heading-five text-gray-50 flex justify-center">
                        Quick Links
                    </div>
                    <div className="flex gap-x-6">
                        {quickLinks.map((link) => (
                            <Badge>
                                <div
                                    className="justify-center flex link-regular text-primary-400 text-base"
                                >
                                    <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                                </div>
                            </Badge>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard