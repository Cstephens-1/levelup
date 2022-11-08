import { useState } from "react";
import StudentProfile from "./StudentProfile"

function Students({students, fetchStudents}){

    console.log("these are the students", students)

    const [newLastName, setNewLastName] = useState([])
    const [newFirstName, setNewFirstName] = useState([])
    const [newGender, setNewGender] = useState([])
    const [newLevel, setNewLevel] = useState([])
     //add a new student to the master list
     function handleSubmit(synthEvent){
        synthEvent.preventDefault();
        const newStudent = {
            last_name: newLastName,
            name: newFirstName,
            gender: newGender,
            level: newLevel

            // user_id: user
        };
        fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newStudent)})
            .then(resp=> resp.json())
            .then(studentFromDataBase=> fetchStudents())
    }


    function mapStudents(students){
        return(
            students.map(student =>{
                return(
                    // handleDelete={handleDelete}
                    <StudentProfile student={student} key={student.id} />
                )
            })
        )
    }

    return(
        <>
        <h1>{mapStudents(students)}</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}/>
            <input type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/>
            <input type="text" value={newGender} onChange={(e) => setNewGender(e.target.value)}/>
            <input type="text" value={newLevel} onChange={(e) => setNewLevel(e.target.value)}/>
            <button type="submit">Add New Student</button>
        </form>
        </>
    )
}

export default Students