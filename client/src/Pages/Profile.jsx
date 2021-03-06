import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./page.css";
import Items from "../Components/Items";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";

function Profile() {
  const navigate = useNavigate();
  const [state, setState] = useState(true);
  const [itemList, setItemlist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("User")) == null) {
      navigate("/login");
    }
  });
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_DB_URL}/product/getproducts/${JSON.parse(
          localStorage.getItem("User")
        )}`
      )
      .then((Response) => {
        setItemlist(Response.data);
      });
    setLoading(false)
  }, []);

  const [itemdetails, setItemdetails] = useState({
    itemName: "",
    itemPrice: "",
  });
  const addProduct = (e) => {
    e.preventDefault();
    axios.post(
      `${process.env.REACT_APP_DB_URL}/product/addproduct/${
        itemdetails.itemName
      }/${JSON.parse(localStorage.getItem("User"))}/${itemdetails.itemPrice}`
    );
    setItemdetails({
      itemName: "",
      itemPrice: "",
    });
  };

  return (
    <>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
        className="row page container"
      >
        <h1 style={{ width: "inherit" }}>
          Hello {JSON.parse(localStorage.getItem("User"))}
        </h1>
        <div className="col-8 row myitems">
        {(loading )? ( <Loading/> ):("")  }
          {itemList.map((value, key) => {
            return (
              <Items
                key={key}
                setState={setState}
                state={state}
                value={value}
              />
            );
          })}
        </div>
        <div className="additems col-4  my-5 ">
          <form onSubmit={addProduct} className="form easein">
            <h2>Sell Item</h2>
            <div className="mb-3 form-field">
              <label className="form-label">Item Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Item Name"
                onChange={(e) =>
                  setItemdetails({ ...itemdetails, itemName: e.target.value })
                }
                value={itemdetails.itemName}
              />
            </div>
            <div className="mb-3 form-field">
              <label className="form-label">Item Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Item Price"
                onChange={(e) =>
                  setItemdetails({ ...itemdetails, itemPrice: e.target.value })
                }
                value={itemdetails.itemPrice}
              />
            </div>
            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
      </motion.div>
    </>
  );
}

export default Profile;
