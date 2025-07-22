
import { Input } from "@/shared/ui/Input";
import Email from "@/shared/assets/sms.svg";
import Password from "@/shared/assets/key-square.svg"
import { ButtonRequest } from "@/shared/ui/Button";
import { useState } from "react";

const LoginForm = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className="flex flex-col gap-y-6 md:gap-y-10 shrink-0 w-full md:items-start items-center">
            <div className="heading-one text-5xl md:text-heading-one text-gray-50 ">Login</div>
            <div className="w-full max-w-[486px] space-y-4 text-gray-600">
                <Input
                    inputWidth="min-[768px]:max-w-[380px] max-w-[200px] md:max-w-[374px]"
                    placeholder={"Email"}
                    classNames="max-w-3xl md:max-w-[486px]"
                    icon={<Email className="w-6 h-6" />}
                />
                <Input
                    inputWidth="min-[768px]:max-w-[380px] max-w-[200px] md:max-w-[374px]"
                    placeholder={"Password"}
                    type={visible ? "password" : "text"}
                    visible={visible}
                    setVisible={() => setVisible(!visible)}
                    visibleText
                    classNames="max-w-3xl md:max-w-[486px]" icon={<Password className="w-6 h-6" />} />
            </div>
            <ButtonRequest classNames="max-w-[486px]" content={"Login"} />
        </div>
    )
}

export default LoginForm