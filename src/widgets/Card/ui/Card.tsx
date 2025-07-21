import Star from '@/shared/assets/star.svg'
import { Link } from 'react-router-dom';
import variantsOfButton from '../../../shared/const/variantsOfButton';
import { useState } from 'react';
import Popup from '@/shared/ui/Popup/ui/Popup';

type CardProps = {
    image: JSX.Element;
    variants: "normal" | "suggest" | "watched";
    name: string;
    rating: string;
    id: number;
    page: string;
    handleOpenPopup?: () => void;
}

const Card = ({
    page,
    image,
    variants,
    name,
    id,
    rating,
    handleOpenPopup
}: CardProps) => {
    return (
        <div className={`w-[17.625rem] 
        bg-gray-800
        ${variants === 'normal' ? 'p-2' : 'px-2 pt-2 pb-4'}
        rounded-lg`}>
            <div className="relative z-0">
                <div className={`
                    absolute
                    z-1 
                    bg-black-65
                    rounded-lg
                    backdrop-blur-sm
                    left-2
                    top-2.5
                    `}>
                    <div className={`flex
                    text-warning-500
                    items-center
                    ${variants === 'normal' ? 'm-2' : 'my-1 mx-2'}
                    gap-1
                    body-regular
                    text-base`}>
                        <Star />
                        {rating}
                    </div>
                </div>
                {image}
            </div>
            <div
                className={`mt-4 
                ${variants === 'normal' ? 'mb-2' : 'mb-0'}
                p-2 text-gray-50 link-regular`}
            >
                <Link to={`${page}/${id}`}>{name}</Link>
                {variants === 'normal'
                    ?
                    <></>
                    :
                    (<div
                        className={`
                    ${variantsOfButton[variants].color}
                    flex
                    gap-2
                    flex-nowrap
                    link-regular
                    text-base
                    mt-4
                    `}
                    >
                        <button
                        onClick={handleOpenPopup}
                        >{variantsOfButton[variants].image}</button>
                        <label>{variantsOfButton[variants].text}</label>
                    </div>)}
            </div>
        </div>
    )
}

export default Card;