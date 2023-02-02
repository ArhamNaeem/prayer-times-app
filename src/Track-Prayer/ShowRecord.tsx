import React, { useEffect, useRef, useState } from "react";
import { auth, db } from "../config/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import { getDocs, collection, query, where, doc } from "firebase/firestore";
export default function ShowRecord() {
  interface docType {
    id: string;
    date: string;
    fajr: boolean;
    dhuhr: boolean;
    asr: boolean;
    maghrib: boolean;
    esha: boolean;
  }
  const date = Date().slice(0, 15);
  const [user ] = useAuthState(auth)
  const [data, setData] = useState<docType[]>([]);
  const colRef = collection(db, "user-prayer-data");
  const [showModal, setShowModal] = useState(false);

  const getRecords = async () => {
    const querytoget = query(colRef, where("id", "==", user?.uid));
    const documents = await getDocs(querytoget);
    const newData = documents.docs.map((doc) => {
      return {
        id: doc.id,
        date: doc.data().date,
        fajr: doc.data().fajr,
        dhuhr: doc.data().dhuhr,
        asr: doc.data().asr,
        maghrib: doc.data().maghrib,
        esha: doc.data().esha,
      };
    });

    if (JSON.stringify(data) !== JSON.stringify([...newData])) {
      setData([...newData]);
    }
  };

//TODO: enable it to update data whenever new record added/modified
  useEffect(() => {
    getRecords();
    // console.log(data)
  });

  // getRecords()
  return (
    <>
      <div className="mt-5">
        <button
          className=" border w-72 h-36 text-white active:bg-slate-700 font-bold uppercase text-2xl p-3 rounded-sm shadow hover:shadow-lg outline-none focus:outline-none ml-5 sm:mr-4 mt-5 sm:mt-16  lg:mt-24 ease-linear transition-all duration-150 "
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
                    <div className="border-b pb-2 text-lg font-semibold w-96">
                      Prayer details
                    </div>
                    <div className="text-lg  my-2 ">
                      {data.length == 0 ?
                        <p className="p-10 text-xl text-center font-semibold">Not record found!</p>
                        : <textarea
                        className="w-full p-2 h-96 resize-none bg-transparent outline-none"
                        readOnly
                        value={
                          data.map((record) =>
                            `Record date: ${record.date}\nFajr: ${record.fajr ? 'Prayed' : 'Not prayed'}\nDhuhr: ${record.dhuhr ? 'Prayed' : 'Not prayed'}\nAsr: ${record.asr ? 'Prayed' : 'Not prayed'}\nMaghrib: ${record.maghrib ? 'Prayed' : 'Not prayed'}\nEsha: ${record.esha ? 'Prayed' : 'Not prayed'}\n_________________________________________\n`
                          ).join("")
                        }
                      />}
                    </div>

                    <button
                      className=" border text-white active:bg-slate-900 font-bold uppercase text-sm p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
