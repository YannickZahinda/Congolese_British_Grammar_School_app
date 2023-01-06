import React from "react";
import { accountPic } from "../../assets";
const Teachers = () => {
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3">
      <div className=" bg-[#F0F7FF] p-3 rounded-md">
        <div className="border-solid border-b border-black flex gap-5 py-3">
          <h5>Secondaire</h5>
          <div>
            <img
              src={accountPic}
              alt="teacher pic"
              className="rounded-full w-2/2"
            />
          </div>
          <div>...</div>
        </div>
        <div className="flex justify between border-solid border-b border-b text-[9px]">
          <div>
            <h3>Anni whisley</h3>
            <p className="text-slate-500">
              +243992028232 <b></b>
              annew@gmail.com
            </p>
          </div>
          <div>
            <h3>Cours dispense</h3>
            <p className="text-slate-500">
              Education civique <br />
              Informatique
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-[#F0F7FF] p-3 rounded-md">
        <div className="border-solid border-b border-black flex gap-5 py-3">
          <h5>Secondaire</h5>
          <div>
            <img
              src={accountPic}
              alt="teacher pic"
              className="rounded-full w-2/2"
            />
          </div>
          <div>...</div>
        </div>
        <div className="flex justify between border-solid border-b border-b text-[9px]">
          <div>
            <h3>Anni whisley</h3>
            <p className="text-slate-500">
              +243992028232 <b></b>
              annew@gmail.com
            </p>
          </div>
          <div>
            <h3>Cours dispense</h3>
            <p className="text-slate-500">
              Education civique <br />
              Informatique
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Teachers;
