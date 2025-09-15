import ShowcaseHeader from "./ShowcaseHeader"

function Skills({skills,category}) {
    function listSkills() {
        let newList = []
        for (let i=0;i<skills.length; i++) {
            if (skills[i]["categories"].includes(category)) {
                newList.push(skills[i])
            }
        }
        return newList
    }
    return (
        <div className="grid grid-cols-2 p-4 rounded-md bg-theme-grey min-h-full">
            {listSkills().map((skill,index) => (
                <ul key={index}>{skill["name"]}</ul>
            ))}
        </div>
    )
}

export default Skills
