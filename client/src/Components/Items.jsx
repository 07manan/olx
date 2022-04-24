import React from "react";
import axios from "axios";
import "./comp.css"

function Items({value, setState, state}) {

  const markAsSold= async () =>{
    await axios.patch(`${process.env.REACT_APP_DB_URL}/product/markassold/${value._id}`);
    setState(!state);
  }
  return (
    <>
      <div className="item easein ">
        <p style={{margin:"auto", marginLeft:"2.5%"}} >Item Name: {value.name}</p>
        <p style={{margin:"auto"}} >Price: {value.price} Rs</p>
        {(value.unsold) ? ( <p style={{color:"red" , fontWeight:"600", margin:"auto"} } >Not sold</p> )  :(<p style={{ color:"rgb(0, 209, 0)" , fontWeight:"600",marginLeft:"auto", marginRight:"5%" }} >Sold</p>)}
        {(value.unsold) ? ( <button className="btn2" onClick={markAsSold} >Mark as Sold </button> )  :("")}
      </div>
    </>
  );
}

export default Items;
