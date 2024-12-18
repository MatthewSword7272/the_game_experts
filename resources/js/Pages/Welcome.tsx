import Footer from '@/Components/Views/Footer'
import Header from '@/Components/Views/Header'
import {PageProps} from '@/types'
import {Head, Link} from '@inertiajs/react'
import {useEffect, useState} from 'react'

export default function Welcome({auth, laravelVersion, phpVersion}: PageProps<{laravelVersion: string; phpVersion: string}>) {
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

            <div className="relative flex min-h-screen flex-col items-center justify-center bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
                {/* Overlay page when header link is hovered */}
                <div
                    className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-10 ${
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
                <div className="container mx-auto h-screen w-full relative bg-white z-20">
                    <Header onMenuHover={setIsMenuHovered} links={true} />
                    <div></div>
                    <Footer />
                </div>
            </div>
        </>
    )
}
