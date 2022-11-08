import styled from "styled-components"

function StudentProfile({student}){
    return(
        <>
        <table>
            <thead>
                <tr>
                    <th scope="col">Last Name</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Class</th>
                </tr>
            </thead>
    
            <tbody>
                <tr>
                    <th scope="row">{student.last_name}</th>
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