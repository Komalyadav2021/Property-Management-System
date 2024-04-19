import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useScript from "../useScript";
import useStyle from "../useStyle";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { easeIn, motion } from "framer-motion";

export const Property = () => {
  // // for importing js
  useScript("/Search-filter.js");
  // for importing style
  useStyle("/Property-style.css");
  // document.querySelector("#myInput").value = localStorage.getItem("Search");
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const queryParameters = new URLSearchParams(window.location.search);

  console.log(queryParameters.get("city"));
  const fetchProducts = () => {
    const url = "http://kedar/getData?city=" + queryParameters.get("city");
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div class="curve">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1279 351"
          fill="none"
        >
          <motion.path
            d="M1280 249.856C815.274 184.963 233.031 290.247 0 351V0H1280V249.856Z"
            fill="url(#paint0_linear_444_318)"
            stroke="#D09CFA"
            stroke-width="2px"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 0.5 }}
            transition={{
              duration: 1,
            }}
          />
          <defs>
            <linearGradient
              id="paint0_linear_444_318"
              x1="400"
              y1="-93.5"
              x2="819.5"
              y2="590.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D09CFA" />
              <stop offset="1" stop-color="#D09CFA" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <div className="form">
          <form autocomplete="off" action="/Property">
            <div className="autocomplete">
              <input
                id="myInput"
                type="text"
                name="city"
                placeholder="Search..."
                required
              />
              <button id="submit" type="submit">
                <img src="/search-img.svg" alt="search" />
              </button>
            </div>
          </form>
        </div>
        <p class="exit_button" onClick={() => navigate(-1)}>
          <img src="icons8-enter-80.png" alt="Exit" id="exit_button" /> Back
        </p>
        <p class="add_button" onClick={() => navigate("/Add_a_property")}>
          <img src="add.svg" alt="Exit" id="add_button" /> List Your Property
        </p>
      </div>

      <div class="container">
        {products.map((product) => (
          <div class="additionalProp item">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.4,
                delay: 0,
                ease: [0, 0, 0, 1],
              }}
              draggable={false}
              src={
                "http://Kedar/Images/" + product.name + "/" + product.image[1]
              }
              alt="Property-image"
            />
            <div class="propInfo">
              <h1 id="propName2">{product.name}</h1>
              <p id="OwnedBy2">
                {product.street_name}, {product.city}
              </p>
              <p id="OwnedBy2">{product.state}.</p>
              <div>
                <div class="rentBtn">
                  <Link to={"/Rent_Info?id=" + product._id}>
                    <button id="rent_button">Show More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
