import React from "react";
import "./comp.css";

function Allitems({ value }) {
  if (JSON.parse(localStorage.getItem("User")) !== value.email) {
    return (
      <>
        <div className="item easein col-3">
          <p>{value.name}</p>
          <p>{value.price}</p>
          {value.unsold ? <p1>Not sold</p1> : <p2>Sold</p2>}
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
