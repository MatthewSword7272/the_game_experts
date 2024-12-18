import {useState} from 'react'
import Search from '../svgs/Search'
import NavLinks from './NavLinks'
import Portfolio from '../svgs/Portfolio'
import Cart from '../svgs/Cart'

interface HeaderProps {
    onMenuHover: (isHovered: boolean) => void
}

export default function Header({onMenuHover}: HeaderProps) {
    const [search, setSearch] = useState('')
    const [cartItems, setCartItems] = useState(0)

    const headerItems = {
        selectCurrency: 'AUD',
    }
    return (
        <header className="flex items-center px-4 container flex-col gap-y-4 bg-white relative w-full">
            <div className="flex items-center justify-between py-[1.125rem] w-full">
                <img
                    src="https://thegameexperts.com.au/cdn/shop/files/Game_Experts_Logo_205x.png?v=1613354612"
                    alt="The Game Experts"
                    className=""
                />
                <div className="relative w-2/5">
                    <input
                        type="text"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className={'bg-search barlow-regular placeholder:text-black border-none w-full'}
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <Search />
                    </div>
                </div>
                <div className="flex items-center justify-between gap-x-4">
                    <select className="border-none text-blue-600 font-bold text-xs pr-8">
                        <option value={headerItems.selectCurrency}>{headerItems.selectCurrency}</option>
                    </select>

                    <div className="flex items-center gap-x-4">
                        <Portfolio />
                        <Cart />
                    </div>
                </div>
            </div>
            <NavLinks onMenuHover={onMenuHover} />
        </header>
    )
}
