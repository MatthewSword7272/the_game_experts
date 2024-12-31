export default function StyledButton({text, id}: {text: string; id: number}) {

    return (
        <button
            className={`${
                id === 1 ? 'bg-orange-500' : id === 2 ? 'bg-blue-600' : 'bg-black'
            } lg:text-base text-sm font-bold px-4 py-1 lg:py-2 lg:px-8 uppercase hover:underline whitespace-nowrap`}
        >
            {text}
        </button>
    )
}
