import { useState } from "react"
import { motion } from "motion/react";

function Projects({projects,category}) {
    const [projectsInfo,setprojectsInfo] = useState({});
    const handleClick = (name) => {
        setprojectsInfo((prevprojectInfo) => {
            return {
                ...prevprojectInfo,
                [name]: !prevprojectInfo[name]
            }
        })
    }
    return (
            <div className="flex flex-col gap-10" >
                {projects.map((project,index) => (
                    <section key={index} className="flex flex-col px-4 rounded-xl">
                        <button className="bg-white w-full p-4 flex justify-center rounded-md mb-4" onClick={() => handleClick(project["name"])}>
                            {   
                                projectsInfo[project["name"]] ?
                                <span className="text-sm text-left">
                                    {
                                        project["description"].map((descriptor,j) => (
                                            <li key={j} className="ml-4">{descriptor}</li>
                                        ))
                                    }
                                </span>
                                :
                                <img  src={"../images/" + project["image"]} alt={project["name"]} />
                            }
                        </button>
                        <h4 className="font-semibold">{project["name"]}</h4>
                        <p className="text-xs">{project["date"]}</p>
                    </section>
                ))}
            </div>
    )
}

export default Projects
