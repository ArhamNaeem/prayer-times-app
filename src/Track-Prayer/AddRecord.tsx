import React, { useEffect, useRef, useState } from 'react';
import { db, auth } from '../config/firebase';
import { collection, addDoc, deleteDoc,doc ,query,where, getDocs} from 'firebase/firestore';
export default function AddRecord() {

  const [showModal, setShowModal] = useState(false);
  const [prayerCount, setPrayerCount] = useState(0);
  const [statement, setStatement] = useState("");
  const fajr = useRef(false)
  const dhuhr = useRef(false)
  const asr = useRef(false);
  const maghrib = useRef(false)
  const esha = useRef(false)
    const [showPopup, setShowPopup] = useState(false);
  const date = Date().slice(0, 15);
  const currUser = auth.currentUser;
  const colRef = collection(db,'user-prayer-data')
  const addRecord = async () => {
     setPrayerCount(0);
    setShowPopup(true);
     setStatement("Record added successfully!");

    // if the document already exist
    try {
      try {
        const querytodelete = query(colRef, where('id', '==', currUser?.uid), where('date', '==', date))
        const docref = await getDocs(querytodelete)
        const deletedoc = await doc(db, 'user-prayer-data', docref.docs[0].id)
        // console.log(docref.docs)
        await deleteDoc(deletedoc)
      
      } catch (e) {
       console.log('error')
      }
 
      
      await addDoc(colRef, {
        id: currUser?.uid,
        date: date,
        fajr: fajr.current,
        dhuhr: dhuhr.current,
        asr: asr.current,
        maghrib: maghrib.current,
        esha: esha.current,
      });
      fajr.current = dhuhr.current = asr.current = maghrib.current = esha.current = false;
     
    } catch (e) {
      console.log(
      'error'
      )
    } 
     };

  useEffect(() => {
    setTimeout(() => {
      setShowPopup(false);
    }, 1000);
  }, [showPopup]);
  
  
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 py-4 px-4 bg-slate-800 text-white text-center  ${
          showPopup ? "block" : "hidden"
        }`}
      >
        {statement}
      </div>
      <div className="mt-5">
        <button
          className=" border w-72 h-36 text-white active:bg-slate-700 font-bold uppercase text-2xl p-3 rounded-sm shadow hover:shadow-lg outline-none focus:outline-none ml-5 mt-4 sm:mt-16 lg:mt-24 ease-linear transition-all duration-150 "
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
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPrayerCount(prayerCount + 1);
                            fajr.current = true;
                          } else {
                            setPrayerCount(prayerCount - 1);
                            fajr.current = false;
                            // console.log(prayed.current);
                          }
                        }}
                      />
                      <label htmlFor="_fajr">Fajr</label>
                    </div>
                    <div className="text-lg my-2 ">
                      <input
                        className="mx-10"
                        type="checkbox"
                        name="dhuhr"
                        id="_dhuhr"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPrayerCount(prayerCount + 1);
                            setPrayerCount(prayerCount + 1);
                            dhuhr.current = true;
                          } else {
                            setPrayerCount(prayerCount - 1);
                            setPrayerCount(prayerCount - 1);
                            dhuhr.current = false;
                          }
                        }}
                      />
                      <label htmlFor="_dhuhr">Dhuhr</label>
                    </div>
                    <div className="text-lg my-2 ">
                      <input
                        className="mx-10"
                        type="checkbox"
                        name="asr"
                        id="_asr"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPrayerCount(prayerCount + 1);
                            setPrayerCount(prayerCount + 1);
                            asr.current = true;
                          } else {
                            setPrayerCount(prayerCount - 1);
                            setPrayerCount(prayerCount - 1);
                            asr.current = false;
                          }
                        }}
                      />
                      <label htmlFor="_asr">Asr</label>
                    </div>
                    <div className="text-lg my-2 ">
                      <input
                        className="mx-10"
                        type="checkbox"
                        name="maghrib"
                        id="_maghrib"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPrayerCount(prayerCount + 1);
                            setPrayerCount(prayerCount + 1);
                            maghrib.current = true;
                          } else {
                            setPrayerCount(prayerCount - 1);
                            setPrayerCount(prayerCount - 1);
                            maghrib.current = false;
                          }
                        }}
                      />
                      <label htmlFor="_maghrib">Maghrib</label>
                    </div>
                    <div className="text-lg my-2 ">
                      <input
                        className="mx-10"
                        type="checkbox"
                        name="esha"
                        id="_esha"
                        onChange={(e) => {
                          if (e.target.checked) {
                            setPrayerCount(prayerCount + 1);
                            setPrayerCount(prayerCount + 1);
                            esha.current = true;
                          } else {
                            setPrayerCount(prayerCount - 1);
                            setPrayerCount(prayerCount - 1);
                            esha.current = false;
                          }
                        }}
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
                      onClick={() => {
                        setPrayerCount(0);
                        setShowModal(false);
                      }}
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
