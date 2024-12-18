import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/react'
import {UnderlinedText} from './UnderlineText'

interface SubMenuItemProps {
    item: {
        name: string
        link?: string | false
        subItems?: Array<{name: string; link: string}> | false
    }
    activeSubMenu: string | null
    setActiveSubMenu: (name: string | null) => void
}

export const SubMenuItem = ({item, activeSubMenu, setActiveSubMenu}: SubMenuItemProps) => {
    if (!item.subItems) {
        return (
            <MenuItem>
                <a className="hover:text-blue-600 group w-full" href={item.link ? item.link : '#'}>
                    <UnderlinedText text={item.name} isHover />
                </a>
            </MenuItem>
        )
    }

    return (
        <MenuItem>
            <Menu
                as="div"
                className="relative"
                onMouseEnter={() => setActiveSubMenu(item.name)}
                onMouseLeave={() => setActiveSubMenu(null)}
            >
                <MenuButton className="w-full text-left">
                    <div className="flex items-center justify-between">
                        <UnderlinedText text={item.name} isActive={activeSubMenu === item.name} />
                        <div className="w-1/2" />
                    </div>
                </MenuButton>
                <MenuItems
                    static={activeSubMenu === item.name}
                    className="absolute -right-60 -top-5 w-60 bg-white border flex flex-col gap-y-2 py-5 pl-4"
                >
                    {item.subItems.map((subItem) => (
                        <MenuItem key={subItem.name}>
                            <a className="hover:text-blue-600 group w-full" href={subItem.link}>
                                <UnderlinedText text={subItem.name} isHover />
                            </a>
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
        </MenuItem>
    )
}
