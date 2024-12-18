import {navigationMenu} from '@/data/headerDropDowns'
import {ChevronRightIcon} from '@heroicons/react/20/solid'
import {ChevronLeftIcon, GlobeAltIcon, UserIcon} from '@heroicons/react/24/outline'
import {useState} from 'react'

interface MenuState {
    currentMenu: string | null
    parentMenu: string | null
}

export default function MobileMenu() {
    const [menuState, setMenuState] = useState<MenuState>({
        currentMenu: null,
        parentMenu: null,
    })

    const handleMenuClick = (itemName: string) => {
        setMenuState({
            currentMenu: itemName,
            parentMenu: menuState.currentMenu,
        })
    }

    const handleBackClick = () => {
        setMenuState({
            currentMenu: menuState.parentMenu,
            parentMenu: null,
        })
    }

    const renderMainMenu = () => (
        <div className="flex flex-col items-center w-full h-full">
            <div className="flex items-center justify-evenly w-full my-4">
                <UserIcon className="w-10 h-10" />
                <GlobeAltIcon className="w-10 h-10" />
            </div>
            <div className="flex flex-col w-full">
                {navigationMenu.map((item) => (
                    <>
                        <button
                            key={item.name}
                            className="text-left px-6 py-3 hover:bg-gray-100 border-t border-gray-300 flex justify-between"
                            onClick={() => handleMenuClick(item.name)}
                        >
                            {item.name}

                            <ChevronRightIcon className="w-5 h-5 mr-2" />
                        </button>
                    </>
                ))}
            </div>
        </div>
    )

    const renderSubMenu = () => {
        const currentMenuItems = navigationMenu.find((item) => item.name === menuState.currentMenu)
        if (!currentMenuItems) return null

        return (
            <>
                <div className=" px-4 py-3 border-b border-gray-300">
                    <button onClick={handleBackClick} className="flex items-center justify-center">
                        <ChevronLeftIcon className="w-5 h-5 mr-2 flex-1" />
                        Back
                    </button>
                </div>
                <div className="flex flex-col w-full">
                    {currentMenuItems.dropdownItems.map((subItem) => (
                        <button key={subItem.name} className="text-left px-6 py-3 hover:bg-gray-100 border-t border-gray-300">
                            {subItem.name}
                        </button>
                    ))}
                </div>
            </>
        )
    }

    return (
        <div className="flex flex-col items-start w-full h-full">
            {menuState.currentMenu ? renderSubMenu() : renderMainMenu()}
        </div>
    )
}
