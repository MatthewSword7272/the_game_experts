export default function StyledButton({text, id}: {text: string; id: number}) {
    const buttonColour = () => {
        if (id === 1) {
            return 'bg-orange-500'
        } else if (id === 2) {
            return 'bg-[#00afff]'
        }
    }

    return <button className={`${buttonColour()} text-base font-bold py-2 px-8 uppercase hover:underline`}>{text}</button>
}
