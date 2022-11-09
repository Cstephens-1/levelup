import { useEffect, useState } from "react"
import SkillCard from "./SkillCard"

function Skills(){

    const [skills, setSkills] = useState([])
    const [newName, setNewName] = useState([])
    const [newWeight, setNewWeight] = useState([])

    //fetch list of existing skills
    function fetchSkills(){
        fetch("http://localhost:3000/skills")
        .then(resp=> resp.json())
        .then(skill => setSkills(skill))
    }
    useEffect(fetchSkills, [])

    //add a new skill to the DB
    function handleSubmit(synthEvent){
        synthEvent.preventDefault();
        const newSkill = {
            name: newName,
            weight: newWeight,
            // user_id: user
        };
        fetch("http://localhost:3000/skills", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newSkill)})
            .then(resp=> resp.json())
            .then(skillFromDatabase=> fetchSkills())
    }

    function handleDelete(skill){
        fetch(`http://localhost:3000/skills/${skill.id}`,{ 
            method: "DELETE"
        })
        let skillsRemaining = skills.filter(eachSkill => eachSkill.id !== skill.id);
        console.log(skillsRemaining)
        setSkills([...skillsRemaining])
    }

    //format skills
    function mapSkills(skills){
        return(
            skills.map(skill =>{
                return(
                    // 
                    <SkillCard skill={skill} handleDelete={handleDelete} />
                )
            })
        )
    }

    return(
        <>
        <h1>{mapSkills(skills)}</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder= "Skill Name" value={newName} onChange={(e) => setNewName(e.target.value)}/>
            <input type="text" placeholder= "Weight" value={newWeight} onChange={(e) => setNewWeight(e.target.value)}/>
            <button type="submit">Add New Skill</button>
     </form>
     </>
    )
}

export default Skills