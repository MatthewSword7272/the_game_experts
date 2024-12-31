import HeroCard from './HeroCard'

export default function HeroSection() {
    const heroCards = [
        {
            title: 'Plug in to our deals',
            buttonText: 'Shop sale items',
            link: '#',
            image: '//thegameexperts.com.au/cdn/shop/files/1.2_900x.png?v=1614938405',
            srcSet: '//thegameexperts.com.au/cdn/shop/files/1.2_180x.png?v=1614938405 180w, //thegameexperts.com.au/cdn/shop/files/1.2_320x.png?v=1614938405 320w, //thegameexperts.com.au/cdn/shop/files/1.2_540x.png?v=1614938405 540w, //thegameexperts.com.au/cdn/shop/files/1.2_720x.png?v=1614938405 720w, //thegameexperts.com.au/cdn/shop/files/1.2_1080x.png?v=1614938405 1080w, //thegameexperts.com.au/cdn/shop/files/1.2_1366x.png?v=1614938405 1366w, //thegameexperts.com.au/cdn/shop/files/1.2_1920x.png?v=1614938405 1920w, //thegameexperts.com.au/cdn/shop/files/1.2_2048x.png?v=1614938405 2048w',

            cardID: 1,
        },
        {
            title: 'Collect the classics',
            buttonText: 'Collectables',
            link: '#',
            image: '//thegameexperts.com.au/cdn/shop/files/5.1_900x.png?v=1614938408',
            srcSet: '//thegameexperts.com.au/cdn/shop/files/5.1_180x.png?v=1614938408 180w, //thegameexperts.com.au/cdn/shop/files/5.1_320x.png?v=1614938408 320w, //thegameexperts.com.au/cdn/shop/files/5.1_540x.png?v=1614938408 540w, //thegameexperts.com.au/cdn/shop/files/5.1_720x.png?v=1614938408 720w, //thegameexperts.com.au/cdn/shop/files/5.1_1080x.png?v=1614938408 1080w, //thegameexperts.com.au/cdn/shop/files/5.1_1366x.png?v=1614938408 1366w, //thegameexperts.com.au/cdn/shop/files/5.1_1920x.png?v=1614938408 1920w, //thegameexperts.com.au/cdn/shop/files/5.1_2048x.png?v=1614938408 2048w',

            cardID: 2,
        },
        {
            title: 'Playstation',
            buttonText: 'Shop',
            link: '#',
            image: '//thegameexperts.com.au/cdn/shop/files/2.3_900x.png?v=1614938406',
            srcSet: '//thegameexperts.com.au/cdn/shop/files/2.3_180x.png?v=1614938406 180w, //thegameexperts.com.au/cdn/shop/files/2.3_320x.png?v=1614938406 320w, //thegameexperts.com.au/cdn/shop/files/2.3_540x.png?v=1614938406 540w, //thegameexperts.com.au/cdn/shop/files/2.3_720x.png?v=1614938406 720w, //thegameexperts.com.au/cdn/shop/files/2.3_1080x.png?v=1614938406 1080w, //thegameexperts.com.au/cdn/shop/files/2.3_1366x.png?v=1614938406 1366w, //thegameexperts.com.au/cdn/shop/files/2.3_1920x.png?v=1614938406 1920w, //thegameexperts.com.au/cdn/shop/files/2.3_2048x.png?v=1614938406 2048w',

            cardID: 2,
        },
        {
            title: 'Nintendo',
            buttonText: 'Shop',
            link: '#',
            image: '//thegameexperts.com.au/cdn/shop/files/3.1_900x.png?v=1614938406',
            srcSet: '//thegameexperts.com.au/cdn/shop/files/3.1_180x.png?v=1614938406 180w, //thegameexperts.com.au/cdn/shop/files/3.1_320x.png?v=1614938406 320w, //thegameexperts.com.au/cdn/shop/files/3.1_540x.png?v=1614938406 540w, //thegameexperts.com.au/cdn/shop/files/3.1_720x.png?v=1614938406 720w, //thegameexperts.com.au/cdn/shop/files/3.1_1080x.png?v=1614938406 1080w, //thegameexperts.com.au/cdn/shop/files/3.1_1366x.png?v=1614938406 1366w, //thegameexperts.com.au/cdn/shop/files/3.1_1920x.png?v=1614938406 1920w, //thegameexperts.com.au/cdn/shop/files/3.1_2048x.png?v=1614938406 2048w',

            cardID: 1,
        },
        {
            title: 'Sega',
            buttonText: 'Shop',
            link: '#',
            image: '//thegameexperts.com.au/cdn/shop/files/4.1_900x.png?v=1614938406',
            srcSet: '//thegameexperts.com.au/cdn/shop/files/4.1_180x.png?v=1614938406 180w, //thegameexperts.com.au/cdn/shop/files/4.1_320x.png?v=1614938406 320w, //thegameexperts.com.au/cdn/shop/files/4.1_540x.png?v=1614938406 540w, //thegameexperts.com.au/cdn/shop/files/4.1_720x.png?v=1614938406 720w, //thegameexperts.com.au/cdn/shop/files/4.1_1080x.png?v=1614938406 1080w, //thegameexperts.com.au/cdn/shop/files/4.1_1366x.png?v=1614938406 1366w, //thegameexperts.com.au/cdn/shop/files/4.1_1920x.png?v=1614938406 1920w, //thegameexperts.com.au/cdn/shop/files/4.1_2048x.png?v=1614938406 2048w',
            cardID: 2,
        },
    ]
    return (
        <div className="grid md:grid-cols-3 gap-4 my-4">
            {/* Left column - large cards */}
            <div className="md:col-span-2 flex flex-col gap-4">
                <HeroCard {...heroCards[0]} className="lg:text-7xl" variant='center'/>
                <HeroCard {...heroCards[1]} className="lg:text-4xl" />
            </div>

            {/* Right column - smaller cards */}
            <div className="flex flex-col gap-4">
                {heroCards.slice(2).map((card, index) => (
                    <HeroCard key={index} {...card} className="lg:text-3xl" variant='center'/>
                ))}
            </div>
        </div>
    )
}
