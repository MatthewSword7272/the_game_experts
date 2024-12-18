import {navigationMenu} from '@/data/headerDropDowns'
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {useState} from 'react'
import {UnderlinedText} from '../ui/UnderlineText'
import {SubMenuItem} from '../ui/SubMenuItem'

interface NavLinksProps {
    onMenuHover: (isHovered: boolean) => void
}

export default function NavLinks({onMenuHover}: NavLinksProps) {
    const [activeMenu, setActiveMenu] = useState<string | null>(null)
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)

    const handleMouseEnter = (itemName: string) => {
        setActiveMenu(itemName)
        onMenuHover(true)
    }

    const handleMouseLeave = () => {
        setActiveMenu(null)
        onMenuHover(false)
    }

    return (
        <div className={'flex items-center justify-start w-full text-sm font-semibold gap-x-[34px] whitespace-nowrap flex-wrap'}>
            {navigationMenu.map((item) => (
                <Menu
                    key={item.name}
                    as="div"
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                >
                    <MenuButton>
                        <UnderlinedText text={item.name} isActive={activeMenu === item.name} />
                    </MenuButton>
                    <MenuItems
                        className="absolute whitespace-nowrap w-60 gap-y-3 flex flex-col top-7 -left-1 bg-white border font-normal text-base py-5 pl-4"
                        static={activeMenu === item.name}
                    >
                        {item.dropdownItems.map((subItem) => (
                            <SubMenuItem
                                key={subItem.name}
                                item={subItem}
                                activeSubMenu={activeSubMenu}
                                setActiveSubMenu={setActiveSubMenu}
                            />
                        ))}
                    </MenuItems>
                </Menu>
            ))}
        </div>
    )
}
