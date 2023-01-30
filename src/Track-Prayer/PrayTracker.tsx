import React, { useState } from "react";
import AddRecord from "./AddRecord";
import ShowRecord from "./ShowRecord";
import { auth } from "../config/firebase";
export default function Main() {
  const user = auth.currentUser;
 
  return (
    <>
      <div>
        <div className="h-screen text-white bg-slate-900">
          <div className="flex items-center text-3xl text-center py-5 w-4/5 justify-center m-auto bg-slate border-b ">
            Track your prayers
          </div>
          <p className="text-sm ml-16 p-5 lg:ml-36 mt-3">Welcome back, {user?.displayName}</p>
          <div className="flex flex-wrap justify-center">
            <AddRecord />
            <ShowRecord />
          </div>
        </div>
      </div>
    </>
  );
}