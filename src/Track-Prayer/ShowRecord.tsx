import React, { useState } from 'react'
export default function ShowRecord() {
      const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="mt-5">
        <button
          className=" border  text-white active:bg-slate-700 font-bold uppercase text-sm p-3 rounded-sm shadow hover:shadow-lg outline-none focus:outline-none ml-5 mt-2 ease-linear transition-all duration-150 "
          type="button"
          onClick={() => setShowModal(true)}
        >
         Show records
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed border inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                <div className="border-1 rounded-lg shadow-lg relative flex flex-col backdrop-blur-lg outline-none focus:outline-none border">
                  <div className="p-5">
                    <div className="border-b mb-6 text-lg font-semibold w-96">
                      {Date().slice(0, 15)}
                                      </div>
                      <div className="text-lg  my-2 ">

                                          records
                                          </div>
                   <button
                      className="border text-white active:bg-slate-900 font-bold uppercase text-sm p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        // addRecord();
                      }}
                    >
                      Show records
                    </button>
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
          </>
        ) : null}
      </div>
    </>
  );
}