import { useEffect, useState } from "react"
import { TypesOfScreen } from "@/shared/types/index";

const useResize = () => {
    const [type, setType] = useState<TypesOfScreen>('laptop');

    const updateType = () => {
        if (window.innerWidth > 1440) setType('desktop')
        if (window.innerWidth === 1440) setType('laptop')
        if (window.innerWidth < 1440) setType('mobile')
    }

    useEffect(() => {
        updateType()
        window.addEventListener('resize', updateType)

        return () => window.removeEventListener('resize', updateType);

    }, [])

    return type;
}

export default useResize