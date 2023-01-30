import React, { useState } from 'react'
export default function AddRecord() {
      const [showModal, setShowModal] = useState(false);
  const [prayerCount, setPrayerCount] = useState(0);
  const date = Date().slice(0, 15);
  const addRecord = () => {
    setPrayerCount(0)
     };

  return (
  <>
        <div className="mt-5">
          <button
          className=" border w-72 h-36 text-white active:bg-slate-700 font-bold uppercase text-2xl p-3 rounded-sm shadow hover:shadow-lg outline-none focus:outline-none ml-5 mt-16 lg:mt-24 ease-linear transition-all duration-150 "
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add record
          </button>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed border inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl ">
                  <div className="border-1 rounded-lg shadow-lg relative flex flex-col backdrop-blur-lg outline-none focus:outline-none border">
                    <div className="p-5">
                      <div className="border-b mb-6 text-lg font-semibold w-96">
                        {date}
                      </div>
                      <div className="text-lg  my-2 ">
                        <input
                          className="mx-10"
                          id="_fajr"
                          type="checkbox"
                          name="fajr"
                          onChange={(e) =>
                            e.target.checked
                              ? setPrayerCount(prayerCount + 1)
                              : setPrayerCount(prayerCount - 1)
                          }
                        />
                        <label htmlFor="_fajr">Fajr</label>
                      </div>
                      <div className="text-lg my-2 ">
                        <input
                          className="mx-10"
                          type="checkbox"
                          name="dhuhr"
                          id="_dhuhr"
                          onChange={(e) =>
                            e.target.checked
                              ? setPrayerCount(prayerCount + 1)
                              : setPrayerCount(prayerCount - 1)
                          }
                        />
                        <label htmlFor="_dhuhr">Dhuhr</label>
                      </div>
                      <div className="text-lg my-2 ">
                        <input
                          className="mx-10"
                          type="checkbox"
                          name="asr"
                          id="_asr"
                          onChange={(e) =>
                            e.target.checked
                              ? setPrayerCount(prayerCount + 1)
                              : setPrayerCount(prayerCount - 1)
                          }
                        />
                        <label htmlFor="_asr">Asr</label>
                      </div>
                      <div className="text-lg my-2 ">
                        <input
                          className="mx-10"
                          type="checkbox"
                          name="maghrib"
                          id="_maghrib"
                          onChange={(e) =>
                            e.target.checked
                              ? setPrayerCount(prayerCount + 1)
                              : setPrayerCount(prayerCount - 1)
                          }
                        />
                        <label htmlFor="_maghrib">Maghrib</label>
                      </div>
                      <div className="text-lg my-2 ">
                        <input
                          className="mx-10"
                          type="checkbox"
                          name="esha"
                          id="_esha"
                          onChange={(e) =>
                            e.target.checked
                              ? setPrayerCount(prayerCount + 1)
                              : setPrayerCount(prayerCount - 1)
                          }
                        />
                        <label htmlFor="_esha">Esha</label>
                      </div>
                    </div>
                    <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                      <p className=" font-semibold m-auto -translate-x-14">
                        Prayed {prayerCount} / 5
                      </p>
                      <button
                        className="border text-white active:bg-slate-900 font-bold uppercase text-sm p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {
                          setShowModal(false);
                          addRecord();
                        }}
                      >
                        Add record
                      </button>
                      <button
                        className="border text-white active:bg-slate-900 font-bold uppercase text-sm p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      onClick={() => { setPrayerCount(0); setShowModal(false)}}
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
