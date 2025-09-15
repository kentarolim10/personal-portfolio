import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function IntroSection() {
    return (
        <section className="w-full py-4 min-h-screen flex flex-col justify-center">
            <h4 className="text-xl">Hey, I'm Kentaro</h4>
            <h1 className="text-4xl">Software Engineer</h1>
            <section className="flex flex-row justify-center gap-4 py-4">
                <a href="https://www.linkedin.com/in/kentarolim10/" target="_blank"><CiLinkedin/></a>
                <a href="mailto:kentarolim10@gmail.com"><MdOutlineEmail/></a>
                <a href="https://github.com/kentarolim10" target="_blank"><FaGithub/></a>
            </section>
        </section>
    )
}

export default IntroSection;