import React, { useState } from "react";

export default function Main() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>
        <div className="text-3xl text-center py-5 w-4/5 m-auto border-b ">
          Track your prayers
        </div>
        <div className="mt-5">
          <button
            className=" border  text-white active:bg-slate-700 font-bold uppercase text-sm p-3 rounded-sm shadow hover:shadow-lg outline-none focus:outline-none ml-5 mt-2 ease-linear transition-all duration-150 "
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add record
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed border inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                  {/*content*/}
                  <div className="border-1 rounded-lg shadow-lg relative flex flex-col w-3/4 lg:w-full left-20 lg:left-12 backdrop-blur-lg outline-none focus:outline-none border">
                    <div className="p-5">
                      <div className="text-lg font-semibold">
                        Date
                        <input className="mx-12 bg-transparent outline-none" type="date" />
                      </div>
                      
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      {/* <p className="my-2 text-slate-500 text-lg leading-relaxed">
                        <button className="border px-6 py-2 w-full hover:bg-slate-900">
                          Continue with Google
                        </button>
                        <button className="mt-5 border px-6 py-2 w-full hover:bg-slate-900">
                          Continue with Facebook
                        </button>
                      </p> */}
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
      </div>
    </>
  );
}