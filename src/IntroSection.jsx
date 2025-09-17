import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { SiDevpost } from "react-icons/si";

function IntroSection() {
    return (
        <motion.section className="w-full py-4 min-h-screen flex flex-col justify-center" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:2}}>
            <h4 className="text-xl">Hey, I'm Kentaro</h4>
            <h1 className="text-4xl">Software Engineer</h1>
            <section className="flex flex-row justify-center gap-4 py-4">
                <motion.a href="https://www.linkedin.com/in/kentarolim10/" target="_blank" whileTap={{scale:0.95}} whileHover={{scale:1.1}}><CiLinkedin/></motion.a>
                <motion.a href="mailto:kentarolim10@gmail.com" whileTap={{scale:0.95}} whileHover={{scale:1.1}}><MdOutlineEmail/></motion.a>
                <motion.a href="https://github.com/kentarolim10" target="_blank" whileTap={{scale:0.95}} whileHover={{scale:1.1}}><FaGithub/></motion.a>
                <motion.a href="https://devpost.com/kentarolim10" target="_blank" whileTap={{scale:0.95}} whileHover={{scale:1.1}}><SiDevpost/></motion.a>
            </section>
        </motion.section>
    )
}

export default IntroSection;