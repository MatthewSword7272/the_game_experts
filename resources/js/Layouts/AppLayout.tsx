import HeroSection from '@/Components/ui/HeroSection'
import Footer from '@/Components/Views/Footer'
import Header from '@/Components/Views/Header'
import {Head} from '@inertiajs/react'
import {useEffect} from 'react'
import {useState} from 'react'

export default function AppLayout({children}: {children: React.ReactNode}) {
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
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}
