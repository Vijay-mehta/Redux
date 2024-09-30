import React from "react";

const PrintData = ({ setIsOpenForCopy ,modalData}) => {
  console.log("modalData",modalData)
const handlePrint =()=>{
  window.print();
}

  return (
    <div className=" fixed inset-0  bg-black bg-opacity-50  backdrop-blur-sm text-center">
     
      <div className=" bg-white w-[450px] text-center p-3 m-auto  mt-16 ">
      <div
        className=" bg-white   text-right"
        onClick={() => setIsOpenForCopy(false)}
      >
        &#x2717;
      </div>
        <table className="">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{modalData.name}</td>
              <td>{modalData.email}</td>
              <td>{modalData.password}</td>

            </tr>
          </tbody>
          <button className=" mt-10 bg-blue-800 text-white py-1 px-3" type="submit" onClick={handlePrint}>Print</button>

        </table>


      </div>
    </div>
  );
};

export default PrintData;
