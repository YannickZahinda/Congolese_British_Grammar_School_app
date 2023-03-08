import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Pagination from '../../../common/pagination';
import paginate from '../../../common/paginate';
import { data } from './data';
import ListGroup from '../../../common/listGroup';

const Students = () => {
  const [state, setState] = useState({
    pageSize: 4,
    currentPage: 1,
    selectedItem: ""
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
 
  const handleDelete = student => {
    let response = confirm("Est-vous sur vous voulez effacez cet eleve?");
    if(response) {
      console.log(student);
      // Call the server
      setStudents((prev) => {
        const newlist = [...prev];
        return newlist.filter(item => item !== student);
      });
    }
  };

  const handleItemSelect = (item) => {
    setState(prev => {
      return {...prev, currentPage: 1, selectedItem: item};
    });
    console.log(state);
  }

  const { pageSize, currentPage, selectedItem } = state;

  const filtered = selectedItem && selectedItem !== 'All groups' ? students.filter(student => student.education_level === selectedItem) : students;

  const students_page = paginate(filtered, currentPage, pageSize);

  if(students.length === 0)
    return(
      <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )

  return (
    <>
      <div className="flex justify-between mb-4">
        <h3>All Students</h3>
        <button className="btn btn-primary">
          <Link to='/new_student' style={{color: 'white', textDecoration: 'none'}}>ADD NEW STUDENT</Link>
        </button>
      </div>
      <ListGroup items={['All groups','Maternelle', 'Primaire', 'Secondaire']}
        onItemSelect={handleItemSelect}
        selectedItem={selectedItem}
      />
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
            <th></th>
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
              <td><button onClick={() => handleDelete(student)} className='btn btn-danger btn-sm'>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={filtered.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}/>
    </>
  )
}

export default Students