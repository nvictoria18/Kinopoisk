import { Navbar } from "@/widgets/Navbar";
import Draw from "@/shared/assets/login.svg"
import Background from "@/shared/assets/background.png"
import { LoginForm } from "@/widgets/LoginForm";

const Login = () => {
    return (<div
        style={{
            backgroundImage: `url(${Background})`
        }} className="w-full relative z-0 bg-no-repeat bg-cover bg-[position:0_5%] pb-120">
        <Navbar isPermission={true} />
        <div className="w-full max-w-2xs min-[768px]:max-w-[700px] md:max-w-[1200px] m-auto flex flex-row items-center gap-x-[126px] pt-10">
            <div className="w-[486px] hidden md:block">
                <div className="relative w-96 bg-gray-900 rounded-[36px] hidden h-140 md:block">
                    <Draw className="absolute top-0 left-0 z-4 hidden md:block w-[486px] h-146" />
                </div>
            </div>
            <div className="shrink-0 w-full max-w-[300px] min-[768px]:max-w-[700px] md:max-w-[486px]">
                <LoginForm/>
            </div>
        </div>
    </div>)
}

export default Login;