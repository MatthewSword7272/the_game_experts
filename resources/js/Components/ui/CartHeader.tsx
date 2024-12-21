import {ShoppingCartIcon, UserIcon} from '@heroicons/react/20/solid'

export default function CartHeader() {
    return (
        <div className="items-center justify-between gap-x-4 flex">
            <select className="border-none text-blue-600 font-bold text-xs pr-8 hidden lg:block">
                <option value={'AUD'}>AUD</option>
            </select>
            <div className="flex items-center gap-x-4">
                <UserIcon className="w-5 h-5 lg:block hidden" />
                <ShoppingCartIcon className="w-5 h-5" />
            </div>
        </div>
    )
}
