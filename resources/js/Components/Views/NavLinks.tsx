import {navigationMenu} from '@/data/headerDropDowns'
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {useState} from 'react'

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
                    as="div"
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                >
                    <MenuButton>
                        <h2 className={`${activeMenu === item.name && 'text-blue-600 focus:text-blue-600'}`}>{item.name}</h2>
                        <hr
                            className={`bg-blue-600 h-[3px] transition-all duration-500 ${
                                activeMenu === item.name ? 'w-full' : 'w-0'
                            }`}
                        />
                    </MenuButton>
                    <MenuItems
                        className="absolute whitespace-nowrap w-60 gap-y-3 flex flex-col top-7 -left-1 bg-white border font-normal text-base py-5 px-4"
                        static={activeMenu === item.name}
                    >
                        {item.dropdownItems.map((subItem) => (
                            <MenuItem>
                                {subItem.subItems ? (
                                    <Menu
                                        as="div"
                                        className="relative"
                                        onMouseEnter={() => setActiveSubMenu(subItem.name)}
                                        onMouseLeave={() => setActiveSubMenu(null)}
                                    >
                                        <MenuButton className="w-full text-left">
                                            <div className={`flex items-center justify-between`}>
                                                <div className="w-fit">
                                                    <h2
                                                        className={`${
                                                            activeSubMenu === subItem.name && 'text-blue-600 focus:text-blue-600'
                                                        }`}
                                                    >
                                                        {subItem.name}
                                                    </h2>
                                                    <hr
                                                        className={`bg-blue-600 h-[3px] transition-all duration-500 ${
                                                            activeSubMenu === subItem.name ? 'w-full' : 'w-0'
                                                        }`}
                                                    />
                                                </div>
                                                <div className="w-1/2"></div>
                                            </div>
                                        </MenuButton>
                                        <MenuItems
                                            static={activeSubMenu === subItem.name}
                                            className="absolute right-0 left-56 top-0 w-60 bg-white border flex flex-col gap-y-2 py-5 px-4"
                                        >
                                            {subItem.subItems.map((subSubItem) => (
                                                <MenuItem>
                                                    <a href={subSubItem.link}>{subSubItem.name}</a>
                                                </MenuItem>
                                            ))}
                                        </MenuItems>
                                    </Menu>
                                ) : (
                                    <a href={subItem.link}>{subItem.name}</a>
                                )}
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>
            ))}
        </div>
    )
}
