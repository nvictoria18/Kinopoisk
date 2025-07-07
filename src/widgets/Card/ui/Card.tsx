import Star from '@/shared/assets/star.svg'
import { Link } from 'react-router-dom';

type CardProps = {
    image: JSX.Element;
    variants: string;
    name: string;
    rating: string;
    id: number;
    page: string
}

const Card = ({
    page,
    image,
    variants,
    name,
    id,
    rating,
}: CardProps) => {

        return (
        <div className="w-[17.625rem] bg-gray-800 p-2 rounded-lg">
            <div className="relative z-0">
                <div className="absolute z-1 bg-black-65 rounded-lg backdrop-blur-sm left-2 top-2.5">
                    <div className='flex text-warning-500 items-center m-2 gap-1 body-regular'>
                        <Star />
                        {rating}
                    </div>
                </div>
                {image}
            </div>
            <div
                className='mt-4 mb-2 p-2 text-gray-50 link-regular'
            ><Link to={`${page}/${id}`}>{name}</Link></div>
            {/*  */}
        </div>
    )
}

export default Card;