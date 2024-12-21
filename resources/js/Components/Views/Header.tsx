import {useState} from 'react'
import NavLinks from './NavLinks'
import {Bars3Icon} from '@heroicons/react/24/outline'
import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
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
        <header className="flex items-center px-4 container flex-col gap-y-4 bg-white relative w-full py-4">
            <div className="flex items-center justify-between py-[1.125rem] w-full">
                <Disclosure>
                    <DisclosureButton>
                        <Bars3Icon className="w-8 h-8 text-blue-600 lg:hidden" />
                    </DisclosureButton>
                    <DisclosurePanel as="div" className="bg-white fixed w-1/3 top-0 left-0 right-0 bottom-0 z-50 flex flex-col">
                        <MobileMenu />
                    </DisclosurePanel>
                </Disclosure>

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
