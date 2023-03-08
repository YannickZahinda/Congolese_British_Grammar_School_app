import React from "react";
import { accountPic } from "../../../../assets";
import MyCalendar from "../asidecalendar/calendar";
import Sidebar from "../sidebar";
import DashboardComponent from "./dash_comp";

// import { cisLanguage } from '@coreui/react';

const Dashboard = () => {
  return (
    <>
      <div className="bg-[#D0DAC4] flex justify-center ">
        <aside className=" w-1/6 bg-white rounded-r-2xl">
          <h1>CBGS</h1>
          <p>Admin panel</p> <br /> <br />
          <Sidebar />
        </aside>
        <div className=" w-3/4 p-4">
          {/* <div className="flex justify-between">
            <div className="flex">
              <div className="bg-white rounded-l-2xl px-2 align-baseline">
                <ion-icon name="search"></ion-icon>
              </div>
              <input
                type="text"
                placeholder="search by name"
                className="rounded-r-2xl text-sm focus:outline-none p-1"
              />
            </div>
            <div>
              <select name="" id="" className="bg-[#D0DAC4]">
                <option value="langue">language</option>
                <option value="anglais">anglais</option>
                <option value="francais">francais</option>
              </select>
            </div>
          </div>{" "} */}
          <br />
          <div className="bg-white rounded-xl p-4">
            <DashboardComponent />
          </div>
        </div>
        <aside className=" w-1/4 p-2 bg-white rounded-l-2xl">
          <div className="flex justify-between">
            <ion-icon name="notifications"></ion-icon>
            <div className="flex text-xs">
              <img
                src={accountPic}
                alt="account pic"
                className="rounded-full"
              />
              <select name="select">
                <option value="accountsetting">Account settings</option>
                <option value="logout">logout</option>
              </select>
            </div>
          </div>
          <div>
            <div className="flex flex-col items-center justify-center py-8 px-4">
              <MyCalendar />
              <div className="bg-[#F0F7FF] h-9 rounded-xl max-w-sm w-full py-8 px-10">
                <h3>No available plan</h3>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Dashboard;
