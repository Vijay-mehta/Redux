import React, { useEffect, useState } from "react";
import { editUser } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Modal = ({ setIsOpen, modalData,indexM }) => {
  const dispatch =useDispatch();
  const [editData,setEditData] =useState({name:"",email:"",password:""})
  const handleChange = (e) => {
    const {name,value}=e.target;
    setEditData((preve)=>({...preve,[name]:value}))
  };



  useEffect(()=>{
setEditData(modalData)
  },[modalData])

  return (
    <div className=" fixed inset-0 bg-black  bg-opacity-50 backdrop-blur-sm">
      <div className="">
        <div className=" flex  flex-row justify-center  ">
          <div className=" w-[450px]   border-white shadow-lg p-8  border-2 mt-20 ">
            <div className=" flex flex-row ">
              <h2 className=" px-2 mb-4 text-2xl font-medium  pr-44">
                Edit Account
              </h2>
              <div className=" bg-white m-2 p-1" onClick={() => setIsOpen(false)}>&#x2717;</div>
            </div>

            <form
              className=" flex flex-col  bg-white p-8"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(editUser(editData,indexM));
                setIsOpen(false)
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={editData.name}
                onChange={handleChange}
                className=" border-2 border-gray-300 py-2 px-2 m-2"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={editData.email}
                onChange={handleChange}
                className=" border-2 border-gray-300 py-2 px-2 m-2"
              />

              <input
                type="text"
                name="password"
                placeholder="Enter Your Password"
                value={editData.password}
                onChange={handleChange}
                className=" border-2 border-gray-300 py-2 px-2 m-2"
              />

              <button
                type="submit"
                className=" bg-blue-600 text-white py-2 px-3 m-2"
              >
                Save
              </button>
            </form>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
