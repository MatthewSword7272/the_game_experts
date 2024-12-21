import Carousel from '@/Components/ui/Carousel'
import Heading from '@/Components/ui/Heading'
import HeroSection from '@/Components/ui/HeroSection'
import ProductCard from '@/Components/ui/ProductCard'
import AppLayout from '@/Layouts/AppLayout'
import {PageProps} from '@/types'
import {Head, Link} from '@inertiajs/react'

export default function Welcome({auth, laravelVersion, phpVersion}: PageProps<{laravelVersion: string; phpVersion: string}>) {
    const franchiseImages = [
        {
            name: 'Funko',
            srcSet:
                '//thegameexperts.com.au/cdn/shop/files/Funko_180x.png?v=1617749597 180w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Funko_320x.png?v=1617749597 320w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Funko_540x.png?v=1617749597 540w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Funko_720x.png?v=1617749597 720w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Funko_1080x.png?v=1617749597 1080w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Funko_1366x.png?v=1617749597 1366w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Funko_1920x.png?v=1617749597 1920w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Funko_2048x.png?v=1617749597 2048w',
        },
        {
            name: 'Pokemon',
            srcSet:
                '//thegameexperts.com.au/cdn/shop/files/9_180x.png?v=1617749676 180w, ' +
                '//thegameexperts.com.au/cdn/shop/files/9_320x.png?v=1617749676 320w, ' +
                '//thegameexperts.com.au/cdn/shop/files/9_540x.png?v=1617749676 540w, ' +
                '//thegameexperts.com.au/cdn/shop/files/9_720x.png?v=1617749676 720w, ' +
                '//thegameexperts.com.au/cdn/shop/files/9_1080x.png?v=1617749676 1080w, ' +
                '//thegameexperts.com.au/cdn/shop/files/9_1366x.png?v=1617749676 1366w, ' +
                '//thegameexperts.com.au/cdn/shop/files/9_1920x.png?v=1617749676 1920w, ' +
                '//thegameexperts.com.au/cdn/shop/files/9_2048x.png?v=1617749676 2048w',
        },
        {
            name: 'Tamagotchi',
            srcSet:
                '//thegameexperts.com.au/cdn/shop/files/7_180x.png?v=1617749696 180w, ' +
                '//thegameexperts.com.au/cdn/shop/files/7_320x.png?v=1617749696 320w, ' +
                '//thegameexperts.com.au/cdn/shop/files/7_540x.png?v=1617749696 540w, ' +
                '//thegameexperts.com.au/cdn/shop/files/7_720x.png?v=1617749696 720w, ' +
                '//thegameexperts.com.au/cdn/shop/files/7_1080x.png?v=1617749696 1080w, ' +
                '//thegameexperts.com.au/cdn/shop/files/7_1366x.png?v=1617749696 1366w, ' +
                '//thegameexperts.com.au/cdn/shop/files/7_1920x.png?v=1617749696 1920w, ' +
                '//thegameexperts.com.au/cdn/shop/files/7_2048x.png?v=1617749696 2048w',
        },
        {
            name: 'Super Mario',
            srcSet:
                '//thegameexperts.com.au/cdn/shop/files/Super_Mario_180x.png?v=1617749969 180w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Super_Mario_320x.png?v=1617749969 320w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Super_Mario_540x.png?v=1617749969 540w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Super_Mario_720x.png?v=1617749969 720w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Super_Mario_1080x.png?v=1617749969 1080w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Super_Mario_1366x.png?v=1617749969 1366w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Super_Mario_1920x.png?v=1617749969 1920w, ' +
                '//thegameexperts.com.au/cdn/shop/files/Super_Mario_2048x.png?v=1617749969 2048w',
        },
    ]

    const newReleases = [
        {
            name: 'new Nintendo 2DS XL Black/Turquoise Console Complete In Box',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/IMG_9223_1920x.jpg?v=1733543617',
            price: '699.99',
        },
        {
            name: 'new Nintendo 2DS XL Black/Turquoise Console Complete In Box',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/IMG_9223_1920x.jpg?v=1733543617',
            price: '699.99',
        },
        {
            name: 'new Nintendo 2DS XL Black/Turquoise Console Complete In Box',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/IMG_9223_1920x.jpg?v=1733543617',
            price: '699.99',
        },
        {
            name: 'new Nintendo 2DS XL Black/Turquoise Console Complete In Box',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/IMG_9223_1920x.jpg?v=1733543617',
            price: '699.99',
        },
        {
            name: 'new Nintendo 2DS XL Black/Turquoise Console Complete In Box',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/IMG_9223_1920x.jpg?v=1733543617',
            price: '699.99',
        },
        {
            name: 'new Nintendo 2DS XL Black/Turquoise Console Complete In Box',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/IMG_9223_1920x.jpg?v=1733543617',
            price: '699.99',
        },
        {
            name: 'new Nintendo 2DS XL Black/Turquoise Console Complete In Box',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/IMG_9223_1920x.jpg?v=1733543617',
            price: '699.99',
        },
        {
            name: 'new Nintendo 2DS XL Black/Turquoise Console Complete In Box',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/IMG_9223_1920x.jpg?v=1733543617',
            price: '699.99',
        },
        {
            name: 'new Nintendo 2DS XL Black/Turquoise Console Complete In Box',
            link: '#',
            image: 'https://thegameexperts.com.au/cdn/shop/files/IMG_9223_1920x.jpg?v=1733543617',
            price: '699.99',
        },
    ]
    return (
        <>
            <Head title="Welcome" />

            <AppLayout>
                <HeroSection />
                <Carousel images={franchiseImages} items={franchiseImages.length} />
                <div className="my-10 space-y-4">
                    <Heading title="New Releases" />
                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                        {newReleases.map((release, index) => (
                            <ProductCard key={index} {...release} />
                        ))}
                    </div>
                </div>
            </AppLayout>
        </>
    )
}
