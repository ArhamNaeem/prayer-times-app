import React from "react";

export default function Navbar() {
  const SignInPopUp = () => {
   console.log('please log in or sign up')
 }

  return (
    <div className=" bg-black h-1/6 justify-center text-white flex items-center pl-10 md:pl-3  text-3xl">
      <p>Prayer Times</p>
      <p className="p-3 pb-0 md:p-0 md:absolute md:right-14 ">
        <button onClick={SignInPopUp} className="text-sm border border-white p-2 rounded-md">
          Track your prayers
        </button>
      </p>
    </div>
  );
}
