import React, { useEffect, useState } from "react";
import axios from "axios";
import Allitems from "../Components/Allitems";
import "./page.css";

function Home() {
  const [itemList, setItemlist] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/product/allproducts`).then((Response) => {
      setItemlist(Response.data);
    });
  }, []);

  return (
    <>
      <div className="constainer page row">
        <h1>Checkout these awesome items</h1>
        <div className="sellitemlist row">
          {itemList.map((value, key) => {
            return <Allitems key={key} value={value} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
