import Like from "@/shared/assets/like.svg"
import Video from "@/shared/assets/video-tick.svg"

const variantsOfButton = {
    suggest: {
        image: <Like className="w-4 h-4 md:w-6 md:h-6" />,
        text: 'Suggest this',
        color: 'text-primary-400'
    },
    watched: {
        image: <Video className="w-4 h-4 md:w-6 md:h-6" />,
        text: 'Already watched',
        color: 'text-success-400'
    }
}

export default variantsOfButton;