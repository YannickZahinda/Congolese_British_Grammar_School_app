import React from "react";
import { Link } from "react-router-dom";
import { accountPic } from "../../../../assets";
import './style.css'

const Teachers = () => {
  const teachers = [
    {
      education__level: "Primary",
      name: "Anny Whisley",
      photo: accountPic,
      phone__number: "+243992028232",
      address_email: "annew@gmail.com",
      social__item: ['facebook__link', 'twitter__link'],
      course__item: ['Education civique', 'Informatique', 'chant'],
      class__item: ['4ieme', '5ieme', '3ieme'],
      preferences: 'J\'adore le Sport et faire du Sky',
    },
    {
      education__level: "Secondary",
      name: "Jackson White",
      photo: accountPic,
      phone__number: "+243992028232",
      address_email: "annew@gmail.com",
      social__item: ['facebook__link', 'twitter__link'],
      course__item: ['Education civique', 'Informatique', 'chant'],
      class__item: ['4ieme', '5ieme', '3ieme'],
      preferences: 'J\'adore le Sport et faire du Sky',
    },
    {
      education__level: "Nursery",
      name: "Jeanne Doe",
      photo: accountPic,
      phone__number: "+243992028232",
      address_email: "annew@gmail.com",
      social__item: ['facebook__link', 'twitter__link'],
      course__item: ['Education civique', 'Informatique', 'chant'],
      class__item: ['4ieme', '5ieme', '3ieme'],
      preferences: 'J\'adore le Sport et faire du Sky',
    }
  ]
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
        {teachers.map((teacher) => {
        return(
          <div className="bg-[#F0F7FF] p-3 rounded-md teacher__content">
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
      </div>
        )
      })}
      </div>
    </div>
    </>
  );
};

export default Teachers;
