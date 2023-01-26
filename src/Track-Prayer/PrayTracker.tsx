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
          <div className="flex">
            <AddRecord />
            <ShowRecord />
          </div>
        </div>
      </div>
    </>
  );
}