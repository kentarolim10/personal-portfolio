import { useState } from "react"
import data from "../src/data.json"
import Skills from "./Skills"
import Experiences from "./Experiences"
import Projects from "./Projects"
import ShowcaseBody from "./ShowcaseBody"

function PrimarySection() {
    const [category,setCategory] = useState(0)

    const incrementCategory = () => {
        setCategory((prevCategory) => {
            let newCategory = prevCategory + 1
            if (newCategory >= data["categories"].length) {
                newCategory = 0
            }
            return newCategory
        })
    }
    const modifiedExperiences = data["work experience"].filter((experience) => experience["categories"].includes(data.categories[category])).sort((a,b) => a["startDate"] < b["startDate"])
    const modifiedProjects = data["projects"].filter((project) => project["categories"].includes(data.categories[category]))

    return (
        <section className='flex flex-col'>
            <div className="text-left text-xl">
                <h2 >My highlights as a</h2>
                <button className="text-3xl bg-[#77DD77] rounded-3xl px-4 py-2 my-2" onClick={incrementCategory}>{data.categories[category]}</button>
                <section className="flex flex-col gap-4 py-4">
                    {
                        modifiedExperiences.length > 0 ?
                        <ShowcaseBody title={"Work Experience"} onRight={false} ><Experiences experiences={modifiedExperiences} category={data.categories[category]} /></ShowcaseBody> :
                        <></>
                    }
                    {
                        modifiedProjects.length > 0 ?
                        <ShowcaseBody title={"Projects"} onRight={true} ><Projects projects={modifiedProjects} /></ShowcaseBody>:
                        <></>
                    }
                    <ShowcaseBody title={"Skills"} onRight={false} ><Skills skills={data["skills"]} category={data.categories[category]} /></ShowcaseBody>
                </section>
            </div>
        </section>
    )
}

export default PrimarySection
