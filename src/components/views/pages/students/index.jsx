import React from 'react'
import { Link } from 'react-router-dom'

const Students = () => {
  const students = [
    {
      id: 1,
      nom: 'John',
      postnom: 'Doe',
      classe: 'VI',
      date_naissance: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Primaire'
    },
    {
      id: 2,
      nom: 'John',
      postnom: 'Doe',
      classe: 'VI',
      date_naissance: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Primaire'
    },
    {
      id: 3,
      nom: 'John',
      postnom: 'Doe',
      classe: 'VI',
      date_naissance: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Secondaire'
    },
    {
      id: 4,
      nom: 'John',
      postnom: 'Doe',
      classe: 'VI',
      date_naissance: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Secondaire'
    },
    {
      id: 5,
      nom: 'John',
      postnom: 'Doe',
      classe: 'VI',
      date_naissance: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Secondaire'
    },
    {
      id: 6,
      nom: 'John',
      postnom: 'Doe',
      classe: 'VI',
      date_naissance: '18-02-2015',
      parent_number: '0992345321',
      education_level: 'Maternelle'
    },
    {
      id: 7,
      nom: 'John',
      postnom: 'Doe',
      classe: 'VI',
      date_naissance: '18-02-2015',
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
      <th scope="col">Nom</th>
      <th scope="col">Post nom</th>
      <th scope="col">Classe</th>
      <th scope="col">Date de Naissance</th>
      <th scope="col">Numero de Parent</th>
      <th scope="col">Niveau</th>
    </tr>
  </thead>
  <tbody>
      {students.map(student => (
        <tr key={student.id}>
          <th scope={student.id}>{student.id}</th>
          <td>{student.nom}</td>
          <td>{student.postnom}</td>
          <td>{student.classe}</td>
          <td>{student.date_naissance}</td>
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