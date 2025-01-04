import {Link} from '@inertiajs/react'
import {CloseButton, Dialog, DialogPanel, DialogTitle} from '@headlessui/react'
import Close from '../svgs/Close'
import ImageGallery from './ImageGallery'
import {useState} from 'react'
import StyledButton from './StyledButton'

interface ProductDialogProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    name: string
    images: string[]
    link: string
    price: string
}

export default function ProductDialog({isOpen, setIsOpen, images, link, price, name}: ProductDialogProps) {
    const [quantity, setQuantity] = useState(1)

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            transition
            className="fixed inset-0 z-50 bg-black/50 transition duration-300 ease-out data-[closed]:opacity-0"
        >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-h-[30rem] w-[56.25rem] max-w-[90%]">
                <div className="absolute -top-8 right-0 z-50">
                    <button onClick={() => setIsOpen(false)}>
                        <CloseButton as={Close}></CloseButton>
                    </button>
                </div>
                <DialogPanel className="bg-white py-10 px-6 h-full w-full overflow-y-scroll">
                    <div className='flex lg:flex-row flex-col gap-5'>
                        <div className="lg:w-[60%]">
                            <ImageGallery images={images} />
                        </div>
                        <div className="lg:w-[40%]">
                            <DialogTitle>
                                <Link href={link} className="hover:text-blue-600 hover:underline uppercase font-semibold text-3xl">
                                    {name}
                                </Link>
                                <p className="font-semibold text-[45px]">${price}</p>
                            </DialogTitle>
                            <div className="flex gap-3 h-[3.125rem]">
                                <div className="flex items-center justify-between border w-[40%]">
                                    <button className="px-2 py-3 border-r" onClick={() => setQuantity(quantity - 1)}>
                                        -
                                    </button>
                                    <span className="text-base px-5 text-center">{quantity}</span>
                                    <button className="px-2 py-3 border-l" onClick={() => setQuantity(quantity + 1)}>
                                        +
                                    </button>
                                </div>
                                <div className="w-[60%]">
                                    <StyledButton text="Add to Cart" id={3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    )
}
