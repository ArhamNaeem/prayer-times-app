import React from 'react'
import Navbar from './Navbar'
import PrayerTime from './PrayerTime'

export default function MainPage() {
  return (
    <>
      <div className="h-screen">
      
          <Navbar />     
        <PrayerTime />
       </div> 
    </>
  )
}
