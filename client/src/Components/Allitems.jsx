import React from "react";
import "./comp.css";

function Allitems({ value }) {
  if (JSON.parse(localStorage.getItem("User")) !== value.email) {
    return (
      <>
        <div className="allitems easein col-3">
          <p>{value.name}</p>
          <p>{value.price}</p>
          {value.unsold ? <p style={{ color:"rgb(0, 209, 0)", fontWeight:"600" }} >Not sold</p> : <p style={{ color:"red", fontWeight:"600"}} >Sold</p>}
          <button className="btn2">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href={"mailto:" + value.email}
            >
              {" "}
              Contact Seller
            </a>{" "}
          </button>
        </div>
      </>
    );
  }
}

export default Allitems;
