import styled from "styled-components"

function StudentProfile({student, handleDelete}){

    function deleteThisStudent(){
        handleDelete(student)
    }



    return(
        <>
        <table>
            <tbody>
                <tr>
                    <button onClick={deleteThisStudent}>Delete Student</button>
                    <td>{student.last_name}</td>
                    <td>{student.name}</td>
                    <td>{student.gender}</td>
                    <td>{student.level}</td>
                    <button>Evaluations</button>
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default StudentProfile

// const StudentProfileStyler = styled.div`
//     border-style: solid;
//     border-radius: 5px;
//     /* width: 100%;
//     height: 10%; */
// `