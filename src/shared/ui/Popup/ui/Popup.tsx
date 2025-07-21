import Close from '@/shared/assets/close-square.svg'
import { MouseEventHandler, MutableRefObject, RefObject } from 'react';

type PopupProps = {
    popupRef: RefObject<HTMLDivElement>
    isPopping: boolean;
    setIsPopping: MouseEventHandler<HTMLElement>;
    children: JSX.Element;

}

const Popup = ({
    popupRef,
    isPopping,
    setIsPopping,
    children,
}: PopupProps) => {

    return (<>
        <div
            className={`
            ${isPopping ? 'fixed' : 'hidden'}
            top-0
            left-0
            ${isPopping ? 'bg-[#20283E66]' : 'bg-[#20283E00]'}
            z-[60]
            max-h-dvh
            w-full
            h-full
            max-w-dvw
            transition-all
            duration-500
            ease-in-out
        `}
        >
            {isPopping && <div
                ref={popupRef}
                className={`
                p-10
                md:p-20
                relative 
                z-[1000]
                top-2/4
                left-2/4
                -translate-2/4
                w-full
                max-w-72
                min-[768px]:max-w-140
                md:max-w-140
                bg-[#121829CC]
                backdrop-blur-2xl
                rounded-3xl
                border
                border-gray-800
                ${isPopping ? 'scale-100' : 'scale-75'}
                transition-all
                duration-300
                ease-in-out
            `}>
                <button
                    className="
                    absolute
                    z-[200]
                    right-6
                    top-6"
                    onClickCapture={setIsPopping}
                >
                    <div
                        className='
                        w-6
                        h-6
                        md:p-2
                        md:w-10
                        md:h-10
                        bg-black-30
                        rounded-lg
                    '>
                        <Close
                            className='
                            w-6
                            h-6
                            md:w-6
                            md:h-6
                        '
                        />
                    </div>
                </button>
                {children}
            </div>}

        </div>
    </>)
}

export default Popup;

