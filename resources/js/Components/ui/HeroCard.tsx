import StyledButton from './StyledButton'

interface HeroCardProps {
    title: string
    buttonText: string
    link: string
    image: string
    cardID: number
    className?: string
}

export default function HeroCard({title, buttonText, link, image, cardID, className}: HeroCardProps) {
    return (
        <div className={`relative overflow-hidden bg-cover bg-center group ${className}`}>
            <div
                className="absolute w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110 bg-no-repeat bg-center bg-cover"
                style={{backgroundImage: `url(${image})`}}
            />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/60 to-transparent transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative z-10 flex items-center h-full w-full">
                <div className="text-start text-white w-2/5 ml-10 uppercase space-y-5">
                    <h2 className="font-semibold mb-2">{title}</h2>

                    <StyledButton text={buttonText} id={cardID} />
                </div>
            </div>
        </div>
    )
}
