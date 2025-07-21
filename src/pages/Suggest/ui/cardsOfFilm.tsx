import BlackWidow from '@/shared/assets/posters/black widow.png'
import ShangChi from '@/shared/assets/posters/chang-chi.png'
import Loki from '@/shared/assets/posters/loki.png'
import HowIMetYourMother from '@/shared/assets/posters/How I Met Your Mother.png'
import MoneyHeist from '@/shared/assets/posters/Money Heist.png'
import Friends from '@/shared/assets/posters/Friends.png'
import TwoAndaHalfMen from '@/shared/assets/posters/Two And a Half Men.png'
import TheBigBangTheory from '@/shared/assets/posters/The Big Bang Theory.png'

type CardOfFilmProps = {
    id: number;
    name: string;
    rating: string;
    image: JSX.Element;
    variants: "suggest" | "watched" | "normal"
}

const cardsOfFilm: CardOfFilmProps[] = [
    // {
    //     id: 1,
    //     name: 'Black Widow',
    //     rating: '6.8',
    //     image: <img src={BlackWidow} />,
    //     variants: "suggest"
    // },
    // {
    //     id: 2,
    //     name: 'Shang Chi',
    //     rating: '7.9',
    //     image: <img src={ShangChi} />,
    //     variants: "suggest"

    // }, {
    //     id: 3,
    //     name: 'Loki',
    //     rating: '8.4',
    //     image: <img src={Loki} />,
    //     variants: "suggest"

    // }, {
    //     id: 4,
    //     name: 'How I Met Your Mother',
    //     rating: '8.3',
    //     image: <img src={HowIMetYourMother} />,
    //     variants: "suggest"

    // }, {
    //     id: 5,
    //     name: 'Money Heist',
    //     rating: '8.3',
    //     image: <img src={MoneyHeist} />,
    //     variants: "watched"

    // }, {
    //     id: 6,
    //     name: 'Friends',
    //     rating: '8.8',
    //     image: <img src={Friends} />,
    //     variants: "suggest"

    // },
    // {
    //     id: 7,
    //     name: 'The Big Bang Theory',
    //     rating: '8.1',
    //     image: <img src={TheBigBangTheory} />,
    //     variants: "suggest"

    // },
    // {
    //     id: 8,
    //     name: 'Two And a Half Men',
    //     rating: '7',
    //     image: <img src={TwoAndaHalfMen} />,
    //     variants: "suggest"
    // },
]

export default cardsOfFilm;