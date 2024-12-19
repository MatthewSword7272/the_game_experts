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
            image: 'https://thegameexperts.com.au/cdn/shop/files/1.2_720x.png?v=1614938405',
            cardID: 1,
        },
        {
            title: 'Collect the classics',
            buttonText: 'Collectables',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/5.1_320x.png?v=1614938408',
            cardID: 2,
        },
        {
            title: 'Playstation',
            buttonText: 'Shop',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/2.3_1920x.png?v=1614938406',
            cardID: 2,
        },
        {
            title: 'Nintendo',
            buttonText: 'Shop',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/3.1_720x.png?v=1614938406',
            cardID: 1,
        },
        {
            title: 'Sega',
            buttonText: 'Shop',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/4.1_1366x.png?v=1614938406',
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
                            <div className="relative aspect-video">
                                <HeroCard {...heroCards[0]} className="h-full text-7xl" />
                            </div>
                            <div className="relative aspect-[7/2]">
                                <HeroCard {...heroCards[1]} className="h-full text-5xl" />
                            </div>
                        </div>

                        {/* Right column - smaller cards */}
                        <div className="flex flex-col gap-4">
                            {heroCards.slice(2).map((card, index) => (
                                <div key={index} className="relative aspect-video">
                                    <HeroCard {...card} className="h-full text-3xl" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
