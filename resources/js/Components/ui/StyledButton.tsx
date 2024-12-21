export default function StyledButton({text, id}: {text: string; id: number}) {
    const buttonColour = () => {
        if (id === 1) {
            return 'bg-orange-500'
        } else if (id === 2) {
            return 'bg-[#00afff]'
        }
    }

    return (
        <button
            className={`${buttonColour()} lg:text-base text-sm font-bold p-1 lg:py-2 lg:px-8 uppercase hover:underline whitespace-nowrap`}
        >
            {text}
        </button>
    )
}
