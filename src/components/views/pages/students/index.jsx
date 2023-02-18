import React from 'react'
import { Link } from 'react-router-dom'

const Students = () => {
  const students = [
    {
      id: 1,
      name: 'John',
      surname: 'Doe',
      class: 'VI',
      Date_of_birth: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Primaire'
    },
    {
      id: 2,
      name: 'John',
      surname: 'Doe',
      class: 'VI',
      Date_of_birth: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Primaire'
    },
    {
      id: 3,
      name: 'John',
      surname: 'Doe',
      class: 'VI',
      Date_of_birth: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Secondaire'
    },
    {
      id: 4,
      name: 'John',
      surname: 'Doe',
      class: 'VI',
      Date_of_birth: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Secondaire'
    },
    {
      id: 5,
      name: 'John',
      surname: 'Doe',
      class: 'VI',
      Date_of_birth: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Secondaire'
    },
    {
      id: 6,
      name: 'John',
      surname: 'Doe',
      class: 'VI',
      Date_of_birth: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Maternelle'
    },
    {
      id: 7,
      name: 'John',
      surname: 'Doe',
      class: 'VI',
      Date_of_birth: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Maternelle'
    },
  ]
  return (
    <>
      <div className="flex justify-between mb-4">
        <h3>All Students</h3>
        <button className="btn btn-primary">
          <Link to='/new_student' style={{color: 'white', textDecoration: 'none'}}>ADD NEW STUDENT</Link>
        </button>
      </div>
      <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Surname</th>
      <th scope="col">Class</th>
      <th scope="col">Date of birth</th>
      <th scope="col">Parent number</th>
      <th scope="col">Education level</th>
    </tr>
  </thead>
  <tbody>
      {students.map(student => (
        <tr>
          <th scope={student.id}>{student.id}</th>
          <td>{student.name}</td>
          <td>{student.surname}</td>
          <td>{student.class}</td>
          <td>{student.Date_of_birth}</td>
          <td>{student.parent_number}</td>
          <td>{student.education_level}</td>
        </tr>
      ))}
  </tbody>
</table>
    </>
  )
}

export default Students