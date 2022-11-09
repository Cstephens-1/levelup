function SkillCard({skill, handleDelete}){

    function deleteThisSkill(){
        handleDelete(skill)
    }

    return(
        <>
        <h5>{skill.name}</h5>
        <h5>{skill.weight}</h5>
        <button onClick={deleteThisSkill}>Delete Skill</button>
        </>
    )
}

export default SkillCard