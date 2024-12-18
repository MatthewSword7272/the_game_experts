// New component for the underlined text
interface UnderlinedTextProps {
    text: string
    isActive?: boolean
    isHover?: boolean
}

export const UnderlinedText = ({text, isActive, isHover = false}: UnderlinedTextProps) => (
    <div className="w-fit">
        <h2 className={`${isActive && 'text-blue-600 focus:text-blue-600'}`}>{text}</h2>
        <hr
            className={`bg-blue-600 h-[3px] transition-all duration-500 ${
                isActive ? 'w-full' : isHover ? 'w-0 group-hover:w-full' : 'w-0'
            }`}
        />
    </div>
)
