import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {Link} from '@inertiajs/react'

interface ProductCardProps {
    name: string
    link: string
    image: string
    image2?: string | false
    price: string
}

export default function ProductCard({name, link, image, image2 = false, price}: ProductCardProps) {
    return (
        <Link href={link} className="col-span-1 space-y-1 group">
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full object-cover aspect-auto group-hover:hidden"
                />
                {image2 && (
                    <img
                        src={image2}
                        alt={name}
                        className="w-full object-cover aspect-auto hidden group-hover:block"
                    />
                )}
                <div
                    className={
                        'absolute bottom-0 left-0 w-full text-center py-2 bg-blue-600 uppercase text-white font-semibold transition-all duration-500 lg:translate-y-full group-hover:translate-y-0 translate-y-0'
                    }
                >
                    Add to Cart
                </div>
                <div className="absolute top-1/2 left-1/2 group-hover:opacity-100 opacity-0 transition-opacity bg-white p-2">
                    <MagnifyingGlassIcon className="w-4 h-4"></MagnifyingGlassIcon>
                </div>
            </div>
            <div>
                <h3 className="hover:text-blue-600 hover:underline">{name}</h3>
                <p className="font-semibold">${price}</p>
            </div>
        </Link>
    )
}
