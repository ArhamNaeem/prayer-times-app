import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import Axios from 'axios'
export default function PrayerTime() {
  const [place,setPlace] = useState('London')
  const actualPlace = useRef("london")
   const [link, setLink] = useState(
     "https://muslimsalat.p.rapidapi.com/london.json"
   );
 const options = {
   method: "GET",
   url: link,
   headers: {
     "X-RapidAPI-Key": "e4dc96987amsh59592396d8737d5p14a628jsn28eebe89c2aa",
     "X-RapidAPI-Host": "muslimsalat.p.rapidapi.com",
   },
 };

    useEffect(() => {
    refetch();
  }, [link]);
  
    const { data,refetch, isLoading, isError } = useQuery(["time",link], () => {
      return Axios.request(
        options
      ).then((res) => res.data);
    });
    // const [fajr, setFajr] = useState("");
  const fajr = data?.items[0]["fajr"];
    const dhuhr = data?.items[0]["dhuhr"];
    const asr = data?.items[0]["asr"];
    const maghrib = data?.items[0]["maghrib"];
    const isha = data?.items[0]["isha"];
  const currWeather = data?.today_weather.temperature;

  const refetchAPI = async () => {
    const tempStr = actualPlace.current;
    const str = tempStr[0].toUpperCase() + tempStr.slice(1)
    setPlace(str); setLink(`https://muslimsalat.p.rapidapi.com/${actualPlace.current}.json`)
  }

  return (
    <>
      <div className=" bg-slate-800 text-white h-5/6  flex-col">
        <div className="h-1/5 lg:w-1/2 lg:m-auto flex justify-center p-10 pt-0">
          <input
            type="text"
            placeholder="Enter your city name.."
            onChange={(e) => {
              actualPlace.current = e.target.value;
            }}
            className="mr-4 mt-7  rounded-md outline-none bg-transparent border p-5 text-sm w-2/3"
          />
          <button
            onClick={refetchAPI}
            className="mt-9 text-lg hover:text-white"
          >
            Enter
          </button>
        </div>
        <div className="text-center h-2/3 w-3/4 md:w-1/2 m-auto p-4 text-xl">
          {isError ? (
            <p className="text-4xl mt-10"> No data found..</p>
          ) : isLoading ? (
            <p className="text-4xl mt-10">Fetching data..</p>
          ) : (
            <>
              <p className="-semibold text-3xl mb-3">
                Prayer timings in {place}
              </p>
              <hr className="mb-2" />
              <p className="p-3 pl-10 ">Fajr: {fajr}</p>
              <p className="p-3 pl-10 ">Duhar: {dhuhr}</p>
              <p className="p-3 pl-10 "> Asr: {asr}</p>
              <p className="p-3 pl-10 ">Maghrib: {maghrib}</p>
              <p className="p-3 pl-10 ">Isha {isha}</p>
            </>
          )}
        </div>
        <p className="text-right text-sm mt-4 mr-4 lg:mr-36">Current temperature ~{currWeather} C</p>
      </div>
    </>
  );
}
