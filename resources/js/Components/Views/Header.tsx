import {useState} from 'react'
import NavLinks from './NavLinks'
import {Bars3Icon} from '@heroicons/react/24/outline'
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react'
import MobileMenu from '../ui/MobileMenu'
import SearchBar from '../ui/SearchBar'
import CartHeader from '../ui/CartHeader'

interface HeaderProps {
    onMenuHover: (isHovered: boolean) => void
    links: boolean
}

export default function Header({onMenuHover, links}: HeaderProps) {
    const [search, setSearch] = useState('')

    return (
        <header className="flex items-center flex-col gap-y-4 bg-white relative w-full py-4 z-20">
            <div className="flex items-center justify-between py-[1.125rem] w-full">
                <Popover as="div" className="relative lg:hidden">
                    {({open}) => (
                        <>
                            <PopoverButton>
                                <Bars3Icon className="w-8 h-8 text-blue-600" />
                            </PopoverButton>

                            <div
                                className={`fixed inset-0 transition-opacity duration-300 bg-black/30 z-40 pointer-events-none ${
                                    open ? 'opacity-100 pointer-events-auto' : 'opacity-0'
                                }`}
                                aria-hidden="true"
                            />

                            <PopoverPanel
                                as="div"
                                transition
                                className="bg-white fixed w-1/3 top-0 left-0 bottom-0 z-50 flex flex-col
                                transition duration-300 ease-in-out data-[closed]:-translate-x-full"
                            >
                                <MobileMenu />
                            </PopoverPanel>
                        </>
                    )}
                </Popover>

                <img
                    src="https://thegameexperts.com.au/cdn/shop/files/Game_Experts_Logo_205x.png?v=1613354612"
                    alt="The Game Experts"
                />

                <SearchBar search={search} setSearch={setSearch} className="w-2/5 hidden lg:block" />

                <CartHeader />
            </div>

            <SearchBar search={search} setSearch={setSearch} className="w-full lg:hidden block" />

            {links && <NavLinks onMenuHover={onMenuHover} />}
        </header>
    )
}
