import React from 'react'
import Copyright from './Copyright/Copyright';
import DoctorsList from './Doctors/DoctorsList'
import Navbar from './Navbar/Navbar'

export default function Layout() {
    return (
      <>
       
          <div>
            <Navbar />
            <DoctorsList />
            <Copyright/>

          </div>

          
       
      </>
    );
}
