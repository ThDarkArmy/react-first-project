import React, { useState } from 'react';
import "./Student.css"

const Student = ({ studentData }) => {
//    console.log("Props: ", props.studentData);
//    const { studentData } = props // object destructuring
//    console.log("Student data: ", studentData)

const [studentList, setStudentList] = useState(studentData);
// filter and map functions in javascript
const handleDelete = (id) => {
    const data = studentList.filter(student=> student.id !== id)
    setStudentList(data);
}
  return (
    <div className='student-container'>
        <h3>Student Data</h3>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Website</th>
                <th>Action</th>
            </tr>
           
            {studentList.map(sd => (<tr>
                <td>{sd.id}</td>
                <td>{sd.name}</td>
                <td>{sd.username}</td>
                <td>{sd.email}</td>
                <td>{sd.phone}</td>
                <td>{sd.website}</td>
                <td>
                    <button onClick={()=> handleDelete(sd.id)}>Delete</button>
                </td>
            </tr>))}
            
        </table>


    </div>
  )
}

export default Student