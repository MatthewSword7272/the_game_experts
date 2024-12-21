import StyledButton from './StyledButton'

interface HeroCardProps {
    title: string
    buttonText: string
    link: string
    image: string
    srcSet: string
    aspectRatio: number
    cardID: number
    className?: string
}

export default function HeroCard({title, buttonText, link, image, srcSet, aspectRatio, cardID, className}: HeroCardProps) {
    return (
        <div className={`relative group h-full ${className} text-2xl`}>
            <div className="relative" style={{paddingTop: `${(1 / aspectRatio) * 100}%`}}>
                <img
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out md:group-hover:scale-110"
                    src={image}
                    srcSet={srcSet}
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    alt={title}
                />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 md:bg-gradient-to-t from-white/60 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
            <div className="absolute inset-0 z-10 flex items-center">
                <div className="text-start text-white lg:w-2/5 w-1/2 ml-10 uppercase md:space-y-5">
                    <h2 className="font-semibold mb-2 w-full">{title}</h2>
                    <StyledButton text={buttonText} id={cardID} />
                </div>
            </div>
        </div>
    )
}
