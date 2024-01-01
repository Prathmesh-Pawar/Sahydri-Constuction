import React from "react";
import im1 from "../Images/ORGABIC.png";
import { Link } from "react-router-dom";
 
export default function Bail(props) {


  return (
    <div className="bg-yellow-100 pt-24">
      <div className="px-2">
        <h1 className="bg-white border-black m-2 border-2 rounded-lg  text-center active:scale-90 transition-transform cursor-pointer">
          {" "}
          <Link to="/bailinput">Aple Maidana Baddal mahiti dya</Link>
        </h1>
      </div>
      <h1 className="bg-black text-white mt-2 p-2">Apli Ladaki Bail</h1>

      <div className="flex gap-1  flex-wrap justify-around">
        {props.arr.map((ele ,index) => {
          return (
            <div className="text-white bg-white w-36 border-2 border-black my-2">
              <Link to={`/bail/${ele.name}/${index}`}><img className="p-1" src={im1} alt="" /></Link>
              <div className="text-center text-black p-2 pt-0">
                <h1 className="">Bakasur</h1>
                <p className=" text-sm ">Umbarde,Satara</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


// const arr = [
//   { name: "Bakasur" },
//   { name: "Bakasur" },
//   { name: "Bakasur" },
//   { name: "Bakasur" },
//   { name: "Bakasur" },
//   { name: "Bakasur" },
//   { name: "Bakasur" },
//   { name: "Bakasur" },
// ];