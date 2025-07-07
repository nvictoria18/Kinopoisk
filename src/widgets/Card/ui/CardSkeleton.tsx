const CardSkeleton = () => {
    return (
        <div className="w-[17.625rem] shrink-0 bg-gray-900 p-2 rounded-lg">
            <div className="relative z-0 animate-pulse">
                <div className="absolute w-[3.75rem] h-8 z-1 bg-black-20 rounded-lg backdrop-blur-sm left-2 top-2.5 ">
                </div>
                <div className='bg-gray-800 h-100 w-full rounded-lg' />
            </div>
            <div
                className='mt-4 mb-2 p-2 space-y-6 animate-pulse'
            >
                <div className='bg-gray-800 w-[150px] h-4 rounded-lg' />
                <div className='flex gap-2'>
                    <div className='bg-gray-800 w-4 h-4 rounded-lg' />
                    <div className='bg-gray-800 w-[150px] h-4 rounded-lg' />
                </div>
            </div>
        </div>
    )
}

export default CardSkeleton;