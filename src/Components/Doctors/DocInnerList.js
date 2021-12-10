import React from 'react'
import "./DocList.css";
import {Link } from "react-router-dom";

export default function DocInnerList({ doc, btn_type }) {
  const mydata = (docname) => {
    return <p>{docname}</p>;
  };

  return (
    <>
      <div>
        <div className="card" id="card-ui">
          <a href="#">
            <span className="notify-badge">{doc.cost}</span>
          </a>
          <img src={doc.image_url} alt="Card image"></img>
          <div className="card-body">
            <p id="box-title" className="card-title">
              {doc.doc_name}
            </p>
            <p class="card-text">
              {doc.speciality} <span className="clinic-name">{doc.clinic}</span>
            </p>
            <span>{doc.Availabilty}</span>

            <Link to={doc.doc_name}>
              <button id="custom-btn" className="btn btn-primary">
                {btn_type}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
