import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import {
    accountPic,
    homeIcon,
    eventIcon,
    parentIcon,
    teacherIcon,
    studentIcon,
  } from "../../../../assets";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

  const menuItem = [
    {
      path: "/dashboard",
      name: "Home",
      img: homeIcon,
    },
    {
        path: "/dashboard/teachers",
        name: "Teachers",
        img: teacherIcon,
    },
    {
        path: "/dashboard/students",
        name: "Students",
        img: studentIcon
    },
    {
        path: "/dashboard/events",
        name: "Events",
        img: eventIcon,
      }
  ]
  

  return (
    <ul className="list-none leading-9">
        { menuItem.map((item, index)=> (
          <Link to={item.path}>
            <li key={index}
             onClick={() => {item.path}} 
             className="flex gap-2 hover:bg-[#D0DAC4] hover:border-solid hover:border-[#182C72] hover:border-l-2 p-4 cursor-pointer active:bg-[#D0DAC4] text-xl">
              <span className="self-center">
                <img src={item.img} alt="home icon" />
              </span>
              <p> {item.name}</p>
            </li>
          </Link>
        ))}
    </ul>
  );
};

export default Sidebar;
