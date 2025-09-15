
function ShowcaseHeader({title}) {
    return (
        <div className="bg-white w-[15%] rounded-lg relative overflow-hidden">
            <div className="w-full bg-none relative translate-x-full">
                <h3 className="rotate-90 origin-top-left top-0 translate-x-3 -left-1/2 pl-4 absolute bg-none rounded-md text-xl z-10 whitespace-nowrap">{title}</h3>
            </div>
        </div>
    )
}

export default ShowcaseHeader
