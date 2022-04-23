import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(localStorage.getItem("User"));
  }, []);

  const updateUser = (user) => {
    localStorage.setItem("User", JSON.stringify(user));
    setUser(user);
  };

  const Logout = () =>{
    localStorage.removeItem("User")
    setUser();
  }

  return (
    <>
      <Navbar logout ={Logout} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/login"
          exact
          element={ <Login updateUser={updateUser} user={user} />}
        />
        <Route path="/signup" exact element={<Signup user={user} />} />
        <Route path="/profile" element={ <Profile/> }/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
