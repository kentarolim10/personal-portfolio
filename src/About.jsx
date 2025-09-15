import { motion,useInView } from "motion/react";

function About() {
 
    return (
        <section className="min-h-screen flex flex-col items-center">
            <div className="p-2 rounded-lg w-48">            
                <img src="../images/linkedinpfp.png" alt="profile" className="rounded-2xl" />
            </div>
            <motion.div className="text-left pt-4" initial={{y:100}} whileInView={{y:0}} transition={{duration:0.5}} viewport={{once:true}}>
                <h2 className="py-2">About me</h2>
                <p className="text-lg">
                    I am a 4th year computer science student at the University of British Columbia. My interests are backend development and machine learning. On sunny days, I enjoy activities like basketball and hiking. When it's rainy, I like bouldering, gaming, and clothes!
                </p>
            </motion.div>
            <motion.a href="../src/assets/Kentaro_Lim_Resume.pdf" target="_blank" className="text-lg bg-[#77DD77] rounded-3xl px-4 py-1 mt-10" whileTap={{scale:0.95}} whileHover={{scale:1.05}} >See my resume</motion.a>
        </section>
    )
}

export default About;