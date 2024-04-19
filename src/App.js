import { Home } from "./Components/Home/Home";
import { About } from "./Components/About";
import { Nomatch } from "./Components/Nomatch";
import { Routes, Route, Form } from "react-router-dom";
import { Property } from "./Components/Property/Property";
import { Home1 } from "./Components/Home/Home1";
import { Home2 } from "./Components/Home/Home2";
import { Home3 } from "./Components/Home/Home3";
import { Rent_info } from "./Components/Rent_Info/Rent_info";
import { Property_form } from "./Components/Add_Property/Form";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Home1 />
            </>
          }
        />{" "}
        <Route
          path="/buy"
          element={
            <>
              <Home />
              <Home2 />
            </>
          }
        />{" "}
        <Route
          path="/rent"
          element={
            <>
              <Home />
              <Home3 />
            </>
          }
        />{" "}
        <Route path="/Property" element={<Property />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/Rent_info" element={<Rent_info />} />{" "}
        <Route path="/Add_a_Property" element={<Property_form />} />{" "}
        <Route path="*" element={<Nomatch />} />{" "}
      </Routes>{" "}
    </>
  );
}

export default App;
