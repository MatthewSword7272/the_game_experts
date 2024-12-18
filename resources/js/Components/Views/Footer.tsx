import {Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import {MinusIcon, PlusIcon} from '@heroicons/react/20/solid'

export default function Footer() {
    const footerLinks1 = [
        {
            name: "FAQ'S",
            link: '#',
        },
        {
            name: 'WARRANTY',
            link: '#',
        },
        {
            name: 'PRIVACY POLICY',
            link: '#',
        },
        {
            name: 'SHIPPING INFORMATION',
            link: '#',
        },
        {
            name: 'TERMS AND CONDITIONS',
            link: '#',
        },
        {
            name: 'RETURN AND EXCHANGE POLICY',
            link: '#',
        },
    ]

    const footerLinks2 = [
        {
            name: 'SEGA',
            link: '#',
        },
        {
            name: 'NINTENDO',
            link: '#',
        },
        {
            name: 'PLAYSTATION',
            link: '#',
        },
        {
            name: 'SHOP ALL PRODUCTS',
            link: '#',
        },
        {
            name: 'TRADING CARDS & COLLECTABLES',
            link: '#',
        },
    ]

    const footerItems = {
        address: '944 High St Reservoir VIC 3073',
        hours: 'Wednesday - Sunday: 10am-5pm',
        email: 'info@thegameexperts.com.au',
        phone: '1300 858 883',
    }

    return (
        <footer className="w-full bg-black text-white px-3 overflow-hidden">
            <div className="pt-20 pb-14">
                <div className="flex sm:flex-row flex-col items-start justify-between gap-y-5">
                    <div className="w-1/4 gap-y-5 hidden text-sm sm:flex">
                        <div className="flex flex-col gap-y-1">
                            {footerLinks1.map((link) => (
                                <a href={link.link} key={link.name}>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col gap-y-1">
                            {footerLinks2.map((link) => (
                                <a href={link.link} key={link.name}>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <Disclosure as="div" className="sm:hidden w-full">
                        {({open}) => (
                            <>
                                <DisclosureButton className="flex w-full justify-between py-2">
                                    <span>INFORMATION</span>
                                    {open ? <MinusIcon className="h-5 w-5" /> : <PlusIcon className="h-5 w-5" />}
                                </DisclosureButton>
                                <DisclosurePanel as="div" className="w-full gap-y-5 flex flex-col text-sm">
                                    <div className="flex flex-col gap-y-1">
                                        {footerLinks1.map((link) => (
                                            <a href={link.link} key={link.name}>
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                    <div className="flex flex-col gap-y-1">
                                        {footerLinks2.map((link) => (
                                            <a href={link.link} key={link.name}>
                                                {link.name}
                                            </a>
                                        ))}
                                    </div>
                                </DisclosurePanel>
                            </>
                        )}
                    </Disclosure>
                    <form className="w-full sm:w-1/2 flex items-center gap-x-4">
                        <input type="text" placeholder="Enter your email" className=" w-full border border-white" />
                        <button className="bg-blue-600 text-white px-10 py-2 font-semibold">SUBMIT</button>
                    </form>
                    <div className="sm:w-1/4 w-full flex flex-col gap-y-2 sm:pl-5">
                        <div>
                            <span>ADDRESS</span>
                            <div className={'font-bold text-gray-500'}>{footerItems.address}</div>
                            <div className={'font-bold text-gray-500'}>{footerItems.hours}</div>
                        </div>
                        <div>{footerItems.phone}</div>
                        <div className={'text-blue-600 uppercase'}>{footerItems.email}</div>
                    </div>
                </div>
            </div>
            <hr className="border-gray-900" />
            <div className="flex items-center justify-between py-[30px]">
                <h4 className="w-1/2 text-[13px] font-bold">© 2024 THE GAME EXPERTS. ALL RIGHTS RESERVED.</h4>
                <div className="w-1/2"></div>
            </div>
        </footer>
    )
}
