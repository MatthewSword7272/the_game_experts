import Header from '@/Components/Views/Header'
import {PageProps} from '@/types'
import {Head, Link} from '@inertiajs/react'
import {useState} from 'react'

export default function Welcome({auth, laravelVersion, phpVersion}: PageProps<{laravelVersion: string; phpVersion: string}>) {
    const [isMenuHovered, setIsMenuHovered] = useState(false)

    return (
        <>
            <Head title="Welcome" />

            <div className="relative flex min-h-screen flex-col items-center justify-center bg-hero bg-no-repeat bg-cover bg-center bg-fixed">
                <div
                    className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-10 ${
                        isMenuHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                />
                <div className="container mx-auto h-screen w-full relative bg-white z-20">
                    <Header onMenuHover={setIsMenuHovered} />
                </div>
            </div>
        </>
    )
}
