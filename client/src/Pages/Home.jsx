import React, { useEffect, useState } from "react";
import axios from "axios";
import Allitems from "../Components/Allitems";
import "./page.css";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";

function Home() {
  const [itemList, setItemlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${process.env.REACT_APP_DB_URL}/product/allproducts`).then((Response) => {
      setLoading(false);
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
          {(loading )? ( <Loading/> ):("")  }
          {itemList.map((value, key) => {
            return <Allitems key={key} value={value} />;
          })}
        </div>
      </motion.div>
    </>
  );
}

export default Home;
