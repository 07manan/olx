import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import { AnimatePresence } from "framer-motion";

function App() {
  const [user, setUser] = useState({});
  const location = useLocation();

  useEffect(() => {
    setUser(localStorage.getItem("User"));
  }, []);

  const updateUser = (user) => {
    localStorage.setItem("User", JSON.stringify(user));
    setUser(user);
  };

  const Logout = () => {
    localStorage.removeItem("User");
    setUser();
  };

  return (
    <>
      <Navbar logout={Logout} />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route
            path="/login"
            exact
            element={<Login updateUser={updateUser} user={user} />}
          />
          <Route path="/signup" exact element={<Signup updateUser={updateUser} user={user} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
