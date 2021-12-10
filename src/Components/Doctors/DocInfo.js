import React , {useState} from 'react'
import { Link } from "react-router-dom";
import './DocList.css'
export default function DocInfo({match}) {

const [modalState , setModalstate] = useState(true);
const [patientdata , setPatientdata] = useState([])
const [patient , setpatient] = useState({
  pname : '' , 
  mobile : '' , 
  bdate : '' , 
  btime : '' , 
  bmsg : '' , 
  dname : match.params.doc_name
 })
const {pname , mobile , bdate , btime , bmsg , dname} = patient
 const HandlerMethod = (e) => {
   setpatient({ ...patient, [e.target.name]: [e.target.value] });
 }

 const SubmitHandler = (e) => {
   e.preventDefault()
   console.log(patient)
   const newpatients = [...patientdata , patient];
   setPatientdata(newpatients)
   console.log(patientdata);
   setpatient("");
 }
    
    return (
      <div>
        <div
          className={"modal fade" + (modalState ? " show d-block" : " d-none")}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Doctor Profile</h5>
                <Link to="/">
                  <button type="button" className="close">
                    <span>&times;</span>
                  </button>
                </Link>
              </div>
              <div className="modal-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-4">
                      <h4> {match.params.doc_name}</h4>
                      <div className="myform">
                        {/* Form */}
                        <form onSubmit={SubmitHandler}>
                          <div class="md-form mx-5 my-5">
                            <div className="form-group">
                              <label className="inputlabel" for="inputMDEx1">
                                Name
                              </label>
                              <input
                                value={pname}
                                onChange={HandlerMethod}
                                name="pname"
                                type="text"
                                class="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label className="inputlabel" for="inputMDEx1">
                                Mobile Number
                              </label>
                              <input
                                value={mobile}
                                onChange={HandlerMethod}
                                name="mobile"
                                maxLength={10}
                                type="text"
                                class="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label className="inputlabel" for="inputMDEx1">
                                Choose your Date
                              </label>
                              <input
                                onChange={HandlerMethod}
                                name="bdate"
                                value={bdate}
                                type="date"
                                class="form-control"
                              />
                            </div>
                            <div className="form-group">
                              <label className="inputlabel" for="inputMDEx1">
                                Choose your time
                              </label>
                              <input
                                onChange={HandlerMethod}
                                name="btime"
                                type="time"
                                value={btime}
                                class="form-control"
                              />
                            </div>

                            <div className="form-group">
                              <label className="inputlabel" for="inputMDEx1">
                                Message
                              </label>
                              <textarea
                                onChange={HandlerMethod}
                                name="bmsg"
                                value={bmsg}
                                cols={3}
                                class="form-control"
                              />
                            </div>

                            <input
                              name="dname"
                              hidden
                              type="text"
                              class="form-control"
                              value={dname}
                            />
                            <div className="form-group">
                              <button type="submit" className="btn btn-success">
                                Book Appoitment
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* Patients data */}
                    <div className="col-sm-8">
                      <div>
                        {patientdata.map((patient) => {
                          return (
                            <div key={patient.id}>
                              <table class="table">
                                <thead>
                                  <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Date </th>
                                    <th scope="col">Time</th>
                                    <th scope="col">Mobile</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{patient.pname}</td>
                                    <td>{patient.bdate}</td>
                                    <td>{patient.btime}</td>
                                    <td>{patient.mobile}</td>
                                  </tr>
                                  <tr></tr>
                                </tbody>
                              </table>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link to="/">
                  <button className="btn btn-secondary">Close</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
