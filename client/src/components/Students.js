import { useEffect, useState } from "react";
import StudentProfile from "./StudentProfile"

function Students(){

    const [newLastName, setNewLastName] = useState([])
    const [newFirstName, setNewFirstName] = useState([])
    const [newGender, setNewGender] = useState([])
    const [newLevel, setNewLevel] = useState([])
    const [students, setStudentList] = useState([])

    //fetch list of existing students
    function fetchStudents(){
        fetch("http://localhost:3000/students")
        .then(resp=> resp.json())
        .then(student => setStudentList(student))
    }
    useEffect(fetchStudents, [])

    console.log("these are the students", students)

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

    //delete an existing student from the database
    function handleDelete(student){
        fetch(`http://localhost:3000/students/${student.id}`,{ 
            method: "DELETE"
        })
        let studentsRemaining = students.filter(eachStudent => eachStudent.id !== student.id);
        console.log(studentsRemaining)
        setStudentList([...studentsRemaining])
    }

    //format each student
    function mapStudents(students){
        return(
            students.map(student =>{
                return(
                    // 
                    <StudentProfile student={student} handleDelete={handleDelete}/>
                )
            })
        )
    }

    return(
        <>
         <table>
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Gender</th>
                    <th>Level</th>
                </tr>
            </thead>
          
        <h1>{mapStudents(students)}</h1>
        </table>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder= "Last Name" value={newLastName} onChange={(e) => setNewLastName(e.target.value)}/>
            <input type="text" value={newFirstName} onChange={(e) => setNewFirstName(e.target.value)}/>
            <input type="text" value={newGender} onChange={(e) => setNewGender(e.target.value)}/>
            <input type="text" value={newLevel} onChange={(e) => setNewLevel(e.target.value)}/>
            <button type="submit">Add New Student</button>
        </form>
        </>
    )
}

export default Students