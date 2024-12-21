export default function Heading({title}: {title: string}) {
    return (
        <div className={'flex items-center mb-3'}>
            <div className={'border-b-2 border-gray-200 w-full'}></div>
            <div className={'uppercase text-4xl font-semibold whitespace-nowrap mx-[1.875rem]'}>{title}</div>
            <div className={'border-b-2 border-gray-200 w-full'}></div>
        </div>
    )
}
