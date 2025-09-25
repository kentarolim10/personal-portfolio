import { useState } from "react"
import { motion } from "motion/react";

function Experiences({experiences,category}) {
    const [experiencesInfo,setExperiencesInfo] = useState({});
    const handleClick = (companyName) => {
        setExperiencesInfo((prevExperienceInfo) => {
            return {
                ...prevExperienceInfo,
                [companyName]: !prevExperienceInfo[companyName]
            }
        })
    }
    return (
        <div className="flex flex-col gap-10" >
                {experiences.map((experience,index) => (
                    <section key={index} className="flex flex-col px-4 rounded-md">
                        <motion.button className="bg-white w-full p-4 flex justify-center rounded-xl mb-4" onClick={() => handleClick(experience["company"])}
                            whileHover={{scale:1.05}}
                            >
                            {   
                                experiencesInfo[experience["company"]] ?
                                <span className="text-sm text-left">
                                    {
                                        experience["description"].map((descriptor,j) => (
                                            <li key={j} className="ml-4">{descriptor}</li>
                                        ))
                                    }
                                </span>
                                :
                                <img src={"/images/" + experience["image"]} alt={experience["company"]} />
                            }
                        </motion.button>
                        <h4 className="font-semibold">{experience["position"]}</h4>
                        <p className="text-xs">{experience["date"]}</p>
                    </section>
                ))}
        </div>   
    )
}

export default Experiences
