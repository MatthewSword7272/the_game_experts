import {Link} from '@inertiajs/react'
import {CloseButton, Dialog, DialogPanel, DialogTitle} from '@headlessui/react'
import Close from '../svgs/Close'
import ImageGallery from './ImageGallery'

interface ProductDialogProps {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    name: string
    images: string[]
    link: string
    price: string
}

export default function ProductDialog({isOpen, setIsOpen, images, link, price, name}: ProductDialogProps) {


    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            transition
            className="fixed inset-0 z-50 bg-black/50 transition duration-300 ease-out data-[closed]:opacity-0"
        >
            <DialogPanel className="bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute py-10 px-6 flex gap-5 max-h-[60%] w-[56.25rem] max-w-[90%]">
            <div className="absolute -top-10 right-4">
                <button onClick={() => setIsOpen(false)}>
                    <CloseButton as={Close}></CloseButton>
                </button>
            </div>
            <ImageGallery images={images}/>
                <div className="w-1/2">
                    <DialogTitle>
                        <Link href={link} className="hover:text-blue-600 hover:underline uppercase font-semibold text-3xl">
                            {name}
                        </Link>
                        <p className="font-semibold text-[45px]">${price}</p>
                    </DialogTitle>
                </div>
            </DialogPanel>
        </Dialog>
    )
}
