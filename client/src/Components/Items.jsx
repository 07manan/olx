import React from "react";
import axios from "axios";
import "./comp.css"

function Items({value, setState, state}) {

  const markAsSold= async () =>{
    await axios.patch(`${process.env.REACT_APP_DB_URL}v/product/markassold/${value._id}`);
    setState(!state);
  }
  return (
    <>
      <div className="item easein col-3">
        <p>{value.name}</p>
        <p>{value.price}</p>
        {(value.unsold) ? ( <p style={{color:"red" , fontWeight:"600"} } >Not sold</p> )  :(<p style={{ color:"rgb(0, 209, 0)" , fontWeight:"600" }} >Sold</p>)}
        {(value.unsold) ? ( <button className="btn2" onClick={markAsSold} >Mark as Sold </button> )  :("")}
      </div>
    </>
  );
}

export default Items;
