import React from "react";
import { accountPic } from "../../../../assets";
const Teachers = () => {
  return (
    <>
    <div className="flex justify-between mb-4">
        <h3>All teachers</h3>
        <button type="button" className="rounded-2xl bg-white p-2 text-sm">
          ADD NEW TEACHER
        </button>
    </div>
    <div className="bg-white rounded-xl p-4">
      <h3> Teachers</h3> <br />
      <div className="teacher__container">
        <div className="upper__section">
          <div className="education__level">
            <span>Primary</span>
          </div>
          <div className="avatar">
            <img src={accountPic} alt="" />
          </div>
          <div className="dots">
            <span>...</span>
          </div>
        </div>
        <div className="middle__section">
          <div className="middle__left">
            <span className="name">Anny Whisley</span>
            <span className="phone__number">+24399028232</span>
            <span className="email">anney@gmail.com</span>
            <ul className="socials">
              <li className="social__item">LinkedIn</li>
              <li className="social__item">LinkedIn</li>
              <li className="social__item">LinkedIn</li>
              <li className="social__item">LinkedIn</li>
            </ul>
          </div>
          <div className="middle__right">
            <span className="courses">Cours Dispenses</span>
            <ul className="cours__list">
              <li className="course__item">Education civique</li>
              <li className="course__item">Informatique</li>
              <li className="course__item">Chant</li>
            </ul>
          </div>
        </div>
        <div className="bottom__section">
          <div className="bottom__left">
            <span className="class">Classes encadrees</span>
            <ul className="class__list">
              <li className="class__item">5eme</li>
              <li className="class__item">4eme</li>
              <li className="class__item">3ieme</li>
            </ul>
          </div>
          <div className="bottom__right">
            <span className="pref">Preferences</span>
            <p>J'adore le Sport et faire du Sky</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Teachers;
