import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {Link} from '@inertiajs/react'
import {useState} from 'react'
import ProductDialog from './ProductDialog'

interface ProductCardProps {
    name: string
    link: string
    images: string[]
    price: string
}

export default function ProductCard({name, link, images, price}: ProductCardProps) {
    let [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {<ProductDialog isOpen={isOpen} setIsOpen={setIsOpen} images={images} link={link} price={price} name={name} />}
            <Link href={link} className="col-span-1 space-y-1 group">
                <div className="relative overflow-hidden">
                    <img src={images[0]} alt={name} className="w-full object-cover aspect-auto group-hover:hidden" />
                    <img src={images[1]} alt={name} className="w-full object-cover aspect-auto hidden group-hover:block" />
                    <div
                        className={
                            'absolute bottom-0 left-0 w-full text-center py-2 bg-blue-600 uppercase text-white font-semibold transition-all duration-500 lg:translate-y-full group-hover:translate-y-0 translate-y-0'
                        }
                    >
                        Add to Cart
                    </div>
                    <div className="absolute top-1/2 left-1/2 group-hover:opacity-100 opacity-0 transition-opacity">
                        <button
                            className="bg-white p-2 hover:text-blue-600"
                            onClick={(e) => {
                                e.preventDefault() // Prevent event bubbling
                                e.stopPropagation() // Stop propagation to parent Link
                                setIsOpen(true)
                            }}
                        >
                            <MagnifyingGlassIcon className="w-4 h-4"></MagnifyingGlassIcon>
                        </button>
                    </div>
                </div>
                <div>
                    <h3 className="hover:text-blue-600 hover:underline">{name}</h3>
                    <p className="font-semibold">${price}</p>
                </div>
            </Link>
        </>
    )
}
