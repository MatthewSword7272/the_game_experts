import {CloseButton, Dialog, DialogPanel, DialogTitle, Transition} from '@headlessui/react'
import {XMarkIcon} from '@heroicons/react/20/solid'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
import {Link} from '@inertiajs/react'
import {useState} from 'react'
import Close from '../svgs/Close'

interface ProductCardProps {
    name: string
    link: string
    image: string
    image2?: string | false
    price: string
}

export default function ProductCard({name, link, image, image2 = false, price}: ProductCardProps) {
    let [isOpen, setIsOpen] = useState(false)

    const dialog = () => {
        return (
            <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                transition
                className="fixed inset-0 z-50 bg-black/50 transition duration-300 ease-out data-[closed]:opacity-0"
            >
                <div className="absolute top-1/4 left-[74%] -translate-x-1/2">
                    <button onClick={() => setIsOpen(false)}>
                        <CloseButton as={Close}></CloseButton>
                    </button>
                </div>
                <DialogPanel className="bg-white w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute p-10">
                    <DialogTitle>
                        <h3 className="hover:text-blue-600 hover:underline">{name}</h3>
                        <p className="font-semibold">${price}</p>
                    </DialogTitle>
                </DialogPanel>
            </Dialog>
        )
    }

    return (
        <>
            {dialog()}
            <Link href={link} className="col-span-1 space-y-1 group">
                <div className="relative overflow-hidden">
                    <img src={image} alt={name} className="w-full object-cover aspect-auto group-hover:hidden" />
                    {image2 && (
                        <img src={image2} alt={name} className="w-full object-cover aspect-auto hidden group-hover:block" />
                    )}
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
