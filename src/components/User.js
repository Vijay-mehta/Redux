import { addUser,deleteUser } from "../redux/action";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";

const User = () => {
    const dispatch=useDispatch();
    const [userData,setUserData] =useState({name:"",email:"",password:""})
    const[isOpen,setIsOpen]=useState(false);
    const [modalData,setModalData]=useState('')
    let data= useSelector(state=>state.users)
    const [indexM,setIndexM]=useState('')

  const handleChange = (e) => {
    const {name,value}=e.target;
    setUserData((preve)=>({...preve,[name]:value}))
  };


  return (
    <>
    {isOpen && <Modal setIsOpen={setIsOpen} modalData={modalData} setModalData={setModalData} indexM={indexM}/>}
    <div className=" flex  flex-row justify-center">
    <div className=" w-[450px]   border-white shadow-lg p-8  border-2 mt-20 ">
      <h2 className=" px-2 mb-4 text-2xl font-medium">Create Account</h2>
      <form className=" flex flex-col" onSubmit={(e)=>{e.preventDefault();  dispatch(addUser(userData))
           setUserData({ name: '', email: '', password: '' });
           ;}}>
      <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={userData.name}

          onChange={handleChange}
          className=" border-2 border-gray-300 py-2 px-2 m-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={userData.email}

          onChange={handleChange}
          className=" border-2 border-gray-300 py-2 px-2 m-2"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Your Password"
          value={userData.password}
          onChange={handleChange}
          className=" border-2 border-gray-300 py-2 px-2 m-2"
        />

        
        <button type="submit" className=" bg-blue-600 text-white py-2 px-3 m-2">Add User</button>
      </form>
      <div>

            
      </div>
      
    </div>
    

<div className=" mt-20">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
           {data.length>0  && <> <tr>
            <th  className="px-6 py-3">
                    s.n
                </th>
                <th  className="px-6 py-3">
                     Name
                </th>
                <th  className="px-6 py-3">
                    Email
                </th>
               
                <th  className="px-6 py-3">
                    Action
                </th>
                
            </tr></>} 
          
        </thead>
        <tbody>
                {data.map((user,index)=>(
                   <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={index}>
                    <td className="px-6 py-4">
                       {index}
                   </td>
                   <td className="px-6 py-4">
                       {user.name}
                   </td>
                   <td className="px-6 py-4">
                    {user.email}
                   </td>
                 
                   <td>
                   <span className="mr-5 cursor-pointer" onClick={()=>{setModalData(user);
                   setIndexM(index)
                    setIsOpen(true)}}>&#9998;</span>
                   <span className="cursor-pointer pl-6 " onClick={()=>{alert("Are You Sure You Want to Delete Account?");
                    dispatch(deleteUser(index))}} >&times;</span>
                   </td>


               </tr>
                ))}
            
            
          
           
        </tbody>
    </table>
</div>
</div>
</>
  );
};

export default User;
