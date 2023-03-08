import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../../common/pagination";
import paginate from "../../../common/paginate";
import { data } from "./data";
import './style.css'

const Teachers = () => {
  const [state, setState] = useState({
    pageSize: 4,
    currentPage: 1
  });

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    setTeachers(data);
  }, []);

  const handlePageChange = page => {
    setState((prev) => {
      return {...prev, currentPage: page}
    });
  };

  if(teachers.length === 0)
    return(
       <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )

  const { pageSize, currentPage } = state;

  const teachers_page = paginate(teachers, currentPage, pageSize);

  const handleDelete = teacher => {
    const result = confirm("Are you sur you want to delete this person?");
    if(result) {
      console.log(teacher)
      setTeachers((prev) => {
        const newList = [...prev];
        return newList.filter(person => person !== teacher)
      });
    }
  }
  return (
    <>
    <div className="flex justify-between mb-4">
        <h3>All teachers</h3>
        <button type="button" className="btn btn-primary">
          <Link to='/new_teacher' style={{color: 'white', textDecoration: 'none'}}>ADD NEW TEACHER</Link>
        </button>
    </div>
    <div className="bg-white rounded-xl p-4">
      <h3> Teachers</h3> <br />
      <div className="teacher__container">
        {teachers_page.map((teacher) => {
        return(
          <div key={teacher.id} className="bg-[#F0F7FF] p-3 rounded-md teacher__content">
        <div className="upper__section">
          <div className="education__level">
            <p>{teacher.education__level}</p>
          </div>
          <div className="avatar">
            <img src={teacher.photo} alt="" className="rounded-full w-2/2"/>
          </div>
          <div className="dots">
            <p>...</p>
          </div>
        </div>
        <div className="middle__section">
          <div className="middle__left">
            <p className="name">{teacher.name}</p>
            <p className="phone__number">{teacher.phone__number}</p>
            <p className="email">{teacher.address_email}</p>
            <ul className="socials">
              {teacher.social__item.map((item) => 
                <li className="social__item">{item}</li>
              )}
            </ul>
          </div>
          <div className="middle__right">
            <p className="courses">Cours Dispenses</p>
            <ul className="cours__list">
              {teacher.course__item.map((course) =>
              <li className="course__item">{course}</li>
              )}
            </ul>
          </div>
        </div>
        <div className="bottom__section">
          <div className="bottom__left">
            <p className="class">Classes encadrees</p>
            <ul className="class__list">
              {teacher.class__item.map((level) =>
              <li className="class__item">{level}</li>
              )}
            </ul>
          </div>
          <div className="bottom__right">
            <p className="pref">Preferences</p>
            <p>{teacher.preferences}</p>
          </div>
        </div>
        <button onClick={() => handleDelete(teacher)} className="btn btn-danger btn-sm">Delete</button>
      </div>
        )
      })}
      </div>
    </div>
    <Pagination
      itemsCount={teachers.length}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
    </>
  );
};

export default Teachers;
