import ShowcaseHeader from "./ShowcaseHeader"

function ShowcaseBody({title,onRight,children}) {
    return (
        <section className='flex flex-row w-full justify-between min-h-56 relative py-8'>
             {onRight ? <></> : <ShowcaseHeader title={title} /> }
            <div className="w-[80%] rounded-md text-sm relative">
                {children}
            </div>
            {onRight ? <ShowcaseHeader title={title} /> : <></>}
        </section>
    )
}

export default ShowcaseBody
