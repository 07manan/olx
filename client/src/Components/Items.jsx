import React from "react";
import axios from "axios";
import "./comp.css"

function Items({value, setState, state}) {

  const markAsSold= async () =>{
    await axios.patch(`http://localhost:5000/product/markassold/${value._id}`);
    setState(!state);
  }
  return (
    <>
      <div className="item easein col-3">
        <p>{value.name}</p>
        <p>{value.price}</p>
        {(value.unsold) ? ( <p1>Not sold</p1> )  :(<p2>Sold</p2>)}
        {(value.unsold) ? ( <button className="btn2" onClick={markAsSold} >Mark as Sold </button> )  :("")}
      </div>
    </>
  );
}

export default Items;
