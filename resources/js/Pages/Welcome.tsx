import HeroCard from '@/Components/ui/HeroCard'
import Footer from '@/Components/Views/Footer'
import Header from '@/Components/Views/Header'
import {PageProps} from '@/types'
import {Head, Link} from '@inertiajs/react'
import {useEffect, useState} from 'react'

export default function Welcome({auth, laravelVersion, phpVersion}: PageProps<{laravelVersion: string; phpVersion: string}>) {
    const heroCards = [
        {
            title: 'Plug in to our deals',
            buttonText: 'Shop sale items',
            link: '#',
            image: '//thegameexperts.com.au/cdn/shop/files/1.2_900x.png?v=1614938405',
            srcSet: '//thegameexperts.com.au/cdn/shop/files/1.2_180x.png?v=1614938405 180w, //thegameexperts.com.au/cdn/shop/files/1.2_320x.png?v=1614938405 320w, //thegameexperts.com.au/cdn/shop/files/1.2_540x.png?v=1614938405 540w, //thegameexperts.com.au/cdn/shop/files/1.2_720x.png?v=1614938405 720w, //thegameexperts.com.au/cdn/shop/files/1.2_1080x.png?v=1614938405 1080w, //thegameexperts.com.au/cdn/shop/files/1.2_1366x.png?v=1614938405 1366w, //thegameexperts.com.au/cdn/shop/files/1.2_1920x.png?v=1614938405 1920w, //thegameexperts.com.au/cdn/shop/files/1.2_2048x.png?v=1614938405 2048w',
            aspectRatio: 1.7307692307692308,
            cardID: 1,
        },
        {
            title: 'Collect the classics',
            buttonText: 'Collectables',
            link: '#',
            image: '//thegameexperts.com.au/cdn/shop/files/5.1_900x.png?v=1614938408',
            srcSet: '//thegameexperts.com.au/cdn/shop/files/5.1_180x.png?v=1614938408 180w, //thegameexperts.com.au/cdn/shop/files/5.1_320x.png?v=1614938408 320w, //thegameexperts.com.au/cdn/shop/files/5.1_540x.png?v=1614938408 540w, //thegameexperts.com.au/cdn/shop/files/5.1_720x.png?v=1614938408 720w, //thegameexperts.com.au/cdn/shop/files/5.1_1080x.png?v=1614938408 1080w, //thegameexperts.com.au/cdn/shop/files/5.1_1366x.png?v=1614938408 1366w, //thegameexperts.com.au/cdn/shop/files/5.1_1920x.png?v=1614938408 1920w, //thegameexperts.com.au/cdn/shop/files/5.1_2048x.png?v=1614938408 2048w',
            aspectRatio: 3.6,
            cardID: 2,
        },
        {
            title: 'Playstation',
            buttonText: 'Shop',
            link: '#',
            image: '//thegameexperts.com.au/cdn/shop/files/2.3_900x.png?v=1614938406',
            srcSet: '//thegameexperts.com.au/cdn/shop/files/2.3_180x.png?v=1614938406 180w, //thegameexperts.com.au/cdn/shop/files/2.3_320x.png?v=1614938406 320w, //thegameexperts.com.au/cdn/shop/files/2.3_540x.png?v=1614938406 540w, //thegameexperts.com.au/cdn/shop/files/2.3_720x.png?v=1614938406 720w, //thegameexperts.com.au/cdn/shop/files/2.3_1080x.png?v=1614938406 1080w, //thegameexperts.com.au/cdn/shop/files/2.3_1366x.png?v=1614938406 1366w, //thegameexperts.com.au/cdn/shop/files/2.3_1920x.png?v=1614938406 1920w, //thegameexperts.com.au/cdn/shop/files/2.3_2048x.png?v=1614938406 2048w',
            aspectRatio: 1.76,
            cardID: 2,
        },
        {
            title: 'Nintendo',
            buttonText: 'Shop',
            link: '#',
            image: '//thegameexperts.com.au/cdn/shop/files/3.1_900x.png?v=1614938406',
            srcSet: '//thegameexperts.com.au/cdn/shop/files/3.1_180x.png?v=1614938406 180w, //thegameexperts.com.au/cdn/shop/files/3.1_320x.png?v=1614938406 320w, //thegameexperts.com.au/cdn/shop/files/3.1_540x.png?v=1614938406 540w, //thegameexperts.com.au/cdn/shop/files/3.1_720x.png?v=1614938406 720w, //thegameexperts.com.au/cdn/shop/files/3.1_1080x.png?v=1614938406 1080w, //thegameexperts.com.au/cdn/shop/files/3.1_1366x.png?v=1614938406 1366w, //thegameexperts.com.au/cdn/shop/files/3.1_1920x.png?v=1614938406 1920w, //thegameexperts.com.au/cdn/shop/files/3.1_2048x.png?v=1614938406 2048w',
            aspectRatio: 1.76,
            cardID: 1,
        },
        {
            title: 'Sega',
            buttonText: 'Shop',
            link: '#',
            image: '//thegameexperts.com.au/cdn/shop/files/4.1_900x.png?v=1614938406',
            srcSet: '//thegameexperts.com.au/cdn/shop/files/4.1_180x.png?v=1614938406 180w, //thegameexperts.com.au/cdn/shop/files/4.1_320x.png?v=1614938406 320w, //thegameexperts.com.au/cdn/shop/files/4.1_540x.png?v=1614938406 540w, //thegameexperts.com.au/cdn/shop/files/4.1_720x.png?v=1614938406 720w, //thegameexperts.com.au/cdn/shop/files/4.1_1080x.png?v=1614938406 1080w, //thegameexperts.com.au/cdn/shop/files/4.1_1366x.png?v=1614938406 1366w, //thegameexperts.com.au/cdn/shop/files/4.1_1920x.png?v=1614938406 1920w, //thegameexperts.com.au/cdn/shop/files/4.1_2048x.png?v=1614938406 2048w',
            aspectRatio: 1.76,
            cardID: 2,
        },
    ]
    const [isMenuHovered, setIsMenuHovered] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 200) // Show after 100px scroll
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Head title="Welcome" />

            <div className="relative min-h-screen bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
                <div className={'fixed inset-0 bg-hero bg-no-repeat bg-cover bg-center bg-fixed -z-10'}></div>

                {/* Overlay page when header link is hovered */}
                <div
                    className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-20 ${
                        isMenuHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                />
                {/* Header on Scroll */}
                <div
                    className={`fixed top-0 left-0 right-0 bg-white mx-auto shadow-md transition-transform duration-300 z-30 ${
                        isScrolled ? 'translate-y-0' : '-translate-y-full'
                    }`}
                >
                    <Header onMenuHover={setIsMenuHovered} links={false} />
                </div>
                <div className="container mx-auto h-full w-full relative bg-white xl:max-w-maxW">
                    <Header onMenuHover={setIsMenuHovered} links={true} />
                    <div className="grid lg:grid-cols-3 gap-4 p-4">
                        {/* Left column - large cards */}
                        <div className="lg:col-span-2 flex flex-col gap-4">
                            <HeroCard {...heroCards[0]} className="lg:text-7xl" />
                            <HeroCard {...heroCards[1]} className="lg:text-4xl" />
                        </div>

                        {/* Right column - smaller cards */}
                        <div className="flex flex-col gap-4">
                            {heroCards.slice(2).map((card, index) => (
                                <HeroCard key={index} {...card} className="lg:text-3xl" />
                            ))}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
