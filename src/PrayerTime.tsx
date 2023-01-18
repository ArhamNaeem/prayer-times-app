import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'
export default function PrayerTime() {
  const [place, setPlace] = useState("")

 const options = {
   method: "GET",
   url: "https://muslimsalat.p.rapidapi.com/london.json",
   headers: {
     "X-RapidAPI-Key": "e4dc96987amsh59592396d8737d5p14a628jsn28eebe89c2aa",
     "X-RapidAPI-Host": "muslimsalat.p.rapidapi.com",
   },
 };

     const { data } = useQuery(["cat"], () => {
       return Axios.request(
         options
       ).then((res) => res.data);
     });
  
  const fetchAPI = () => {
 
  }
  return (
    <div className=" bg-slate-400 h-5/6 ">
      <div className="bg-red-300 h-1/5 flex justify-center p-10 pt-0">
        <input
          type="text"
          onChange={(e) => {
            (setPlace(e.target.value)
            )
            //  console.log(text);
          }}
          className="mr-4 mt-7 rounded-md outline-none bg-transparent border p-2 text-sm w-2/3"
        />
        <button onClick={fetchAPI} className='mt-7 text-lg hover:text-white'>Enter</button>
      </div>
      {console.log(data?.items[0])}
    </div>
  );
}
