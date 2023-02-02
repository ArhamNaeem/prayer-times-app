import React, { useState } from "react";
import AddRecord from "./AddRecord";
import ShowRecord from "./ShowRecord";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
export default function Main() {
  const navigate = useNavigate();
  const user = auth.currentUser;
  const signOut = async() => {
    await auth.signOut()
    navigate('/');
 }
  return (
    <>
      <div>
        <div className="h-screen text-white bg-slate-900">
          <div className="flex items-center text-3xl py-5 w-4/5 justify-between m-auto bg-slate border-b">
            <div className="flex">
              <img src="./logo.png" className="h-16 mr-2" />
              <p className="my-auto">Track your prayers</p>
            </div>
            <button
              className="  border text-white active:bg-slate-700 font-bold uppercase text-sm p-3 rounded-sm shadow hover:shadow-lg outline-none focus:outline-none ml-5 mt-2 ease-linear transition-all duration-150 "
              type="button"
              onClick={signOut}
            >
              Sign out
            </button>
          </div>
          {user ? (
            <p className="text-sm ml-16 p-5 lg:ml-36 mt-3">
              Welcome back, {user?.displayName}
            </p>
          ) : (
            <p className="text-sm ml-16 p-5 lg:ml-36 mt-3">Welcome back</p>
          )}
          <div className="flex flex-wrap justify-center">
            <AddRecord />
            <ShowRecord />
          </div>
        </div>
      </div>
    </>
  );
}
