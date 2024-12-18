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
        <footer className="w-full bg-black text-white px-3">
            <div className="pt-20 pb-14">
                <div className="flex items-start justify-between">
                    <div className="w-1/4 flex text-sm">
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
                    <form className="w-1/2 flex items-center gap-x-4">
                        <input type="text" placeholder="Enter your email" className=" w-full border border-white" />
                        <button className="bg-blue-600 text-white px-10 py-2 font-semibold">SUBMIT</button>
                    </form>
                    <div className="w-1/4 flex flex-col gap-y-2 pl-5">
                        <div className={'font-bold text-gray-500'}>{footerItems.address}</div>
                        <div className={'font-bold text-gray-500'}>{footerItems.hours}</div>
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
