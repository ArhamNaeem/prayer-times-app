import PrayTracker from "../Track-Prayer/PrayTracker";
import React, { useState } from "react";
import { googleProvider, facebookProvider,auth } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import {useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/track-prayer");
    } catch (e) {
      console.log('Error occurred');
    }
  }
  const signInWithFacebook = async () => {
    try {
      await signInWithPopup(auth, facebookProvider)
    } catch (e) {
      console.log('Error')
    }
    
 }
  return (
    <div className=" bg-gray-900 h-1/6 justify-center text-white flex items-center pl-10 md:pl-3  text-3xl">
      <p>Prayer Times</p>
      <button
        className=" border  text-white active:bg-slate-700 font-bold uppercase text-sm p-3 rounded-sm shadow hover:shadow-lg outline-none focus:outline-none ml-5 mt-2 ease-linear transition-all duration-150 "
        type="button"
        onClick={() => setShowModal(true)}
      >
        Track your prayers
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed border inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl ">
              {/*content*/}
              <div className="border-1 rounded-lg shadow-lg relative flex flex-col w-3/4 lg:w-full left-20 lg:left-12 backdrop-blur-lg outline-none focus:outline-none border">
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-3xl font-semibold">SIGN IN FIRST!</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-2 text-slate-500 text-lg leading-relaxed">
                    <button onClick={signInWithGoogle} className="border px-6 py-2 w-full hover:bg-slate-900">
                      Continue with Google
                    </button>
                    <button onClick={signInWithFacebook} className="mt-5 border px-6 py-2 w-full hover:bg-slate-900">
                      Continue with Facebook
                    </button>
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="border text-white active:bg-slate-900 font-bold uppercase text-sm p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}
