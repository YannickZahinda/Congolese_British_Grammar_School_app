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
  const [state, setState] = useState({
    currentItem: 'Home',
  });

  const handleSelect = item => {
    setState({ currentItem: item })
  }

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
  
  const { currentItem } = state;

  const styles = (item, currentItem) => {
    return item.name === currentItem ? "list-group-item d-flex gap-2 hover:bg-[#D0DAC4] cursor-pointer active" : "list-group-item d-flex gap-2 hover:bg-[#D0DAC4] cursor-pointer"
  }

  return (
    <ul className="list-group">
        { menuItem.map((item)=> (
          <Link to={item.path} className="text-decoration-none">
            <li key={item.name}
             onClick={() => handleSelect(item.name)} 
             className={styles(item, currentItem)}>
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
