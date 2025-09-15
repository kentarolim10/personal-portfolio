import ShowcaseHeader from "./ShowcaseHeader"
import { motion } from "motion/react"

function ShowcaseBody({title,onRight,children}) {
    return (
        <motion.section className='flex flex-row w-full justify-between min-h-56 relative py-8' initial={{y:100}} whileInView={{y:0}} transition={{duration:0.5}} viewport={{once:true}}>
             {onRight ? <></> : <ShowcaseHeader title={title} /> }
            <motion.div className="w-[80%] rounded-md text-sm relative" >
                {children}
            </motion.div>
            {onRight ? <ShowcaseHeader title={title} /> : <></>}
        </motion.section>
    )
}

export default ShowcaseBody
