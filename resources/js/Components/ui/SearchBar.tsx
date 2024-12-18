import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

interface SearchBarProps {
    search: string
    setSearch: (value: string) => void
    className?: string
}

export default function SearchBar({search, setSearch, className = ''}: SearchBarProps) {
    return (
        <div className={`relative ${className}`}>
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-search barlow-regular placeholder:text-black border-none w-full"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <MagnifyingGlassIcon className="w-5 h-5" />
            </div>
        </div>
    )
}
