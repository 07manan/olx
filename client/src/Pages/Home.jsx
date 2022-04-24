import React, { useEffect, useState } from "react";
import axios from "axios";
import Allitems from "../Components/Allitems";
import "./page.css";
import { motion } from "framer-motion";

function Home() {
  const [itemList, setItemlist] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DB_URL}/product/allproducts`).then((Response) => {
      setItemlist(Response.data);
    });
  }, []);

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: {duration: 0.2} }}
        className="constainer page row"
      >
        <h1 >Checkout these awesome items</h1>
        <div className="sellitemlist row">
          {itemList.map((value, key) => {
            return <Allitems key={key} value={value} />;
          })}
        </div>
      </motion.div>
    </>
  );
}

export default Home;
