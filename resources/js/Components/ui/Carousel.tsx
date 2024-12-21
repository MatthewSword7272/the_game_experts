import Slider from 'react-slick'

interface CarouselProps {
    images: {name: string; srcSet: string}[]
    items: number
}

export default function Carousel({images, items}: CarouselProps) {
    function ArrowRight(props: {className?: string; style?: React.CSSProperties; onClick?: () => void}) {
        const {className, style, onClick} = props
        return (
            <div className={className} style={{...style, position: 'absolute', right: '32px', zIndex: '2'}} onClick={onClick} />
        )
    }

    function ArrowLeft(props: {className?: string; style?: React.CSSProperties; onClick?: () => void}) {
        const {className, style, onClick} = props
        return <div className={className} style={{...style, position: 'absolute', left: '0', zIndex: '2'}} onClick={onClick} />
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 100,
        slidesToShow: items - 1,
        slidesToScroll: 1,
        arrows: true,
        easing: 'ease-in-out',

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
        nextArrow: <ArrowRight />,
        prevArrow: <ArrowLeft />,
    }

    return (
        <div className="py-5">
            <div className={'lg:flex hidden justify-evenly'}>
                {images.map((image, index) => (
                    <div key={index} className="">
                        <img srcSet={image.srcSet} sizes="960px" alt={image.name} className="w-full h-full object-contain" />
                    </div>
                ))}
            </div>
            <div className="lg:hidden block w-full mx-auto">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="px-2">
                            <img
                                srcSet={image.srcSet}
                                sizes="
                                (min-width: 1080px) 720px,
                                (min-width: 720px) 540px,
                                (min-width: 540px) 320px,
                                320px "
                                alt={image.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}
