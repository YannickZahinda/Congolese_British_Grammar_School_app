import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Pagination from '../../../common/pagination';
import paginate from '../../../common/paginate';
import { data } from './data';

const Students = () => {
  const [state, setState] = useState({
    pageSize: 4,
    currentPage: 1
  });

  const [students, setStudents] = useState([]);

  useEffect(() => {
    setStudents(data);
  }, [])

  const handlePageChange = page => {
    setState((prev) => {
      return {...prev, currentPage: page}
    });
  };

  if(students.length === 0) return <p>There are no students in the database</p>
  
  const { pageSize, currentPage } = state;

  const students_page = paginate(students, currentPage, pageSize);
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
          {students_page.map(student => (
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
      <Pagination
        itemsCount={students.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}/>
    </>
  )
}

export default Students