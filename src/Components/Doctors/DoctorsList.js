import React , {useState} from 'react'
import DocInnerList from './DocInnerList';
import Docdata from './Doctorsdata.json'
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Link , Switch } from "react-router-dom";

import "./DocList.css";
import DocInfo from './DocInfo';
export default function DoctorsList() {
    const [doctors , setDoctors] = useState(Docdata)
    const [search , setSearch] = useState('')
    function handleAddrTypeChange(e) {
     setSearch(e.target.value);
      console.log(search);
    }
   
    return (
      <>
        <div className="container">
          <div className="form-group" id='dropdown1'>
            <label className="inputlabel">Choose by Clinic</label>
            <select
              defaultValue="choose"
              value={search}
              onChange={handleAddrTypeChange}
              className="form-control"
            >
              <option>Apollo Spectra</option>
              <option>Apollo Cradle</option>
            </select>
          </div>
          <div className="row">
            {doctors
              .filter((doc) => doc.clinic.includes(search))
              .map((doc) => {
                const btn_type =
                  doc.appointment_count > 5 ? (
                    <Link to="/">
                      <span className="redbtn">Bookings Closed</span>
                    </Link>
                  ) : (
                    "Book an appointment"
                  );
                return (
                  <div className="col-sm-4">
                    <DocInnerList key={doc.id} doc={doc} btn_type={btn_type} />
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
}
