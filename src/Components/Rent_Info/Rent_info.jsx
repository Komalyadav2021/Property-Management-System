import { useNavigate } from "react-router-dom";
import useStyle from "../useStyle";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { motion } from "framer-motion";

export const Rent_info = () => {
  useStyle("Rent_info_style.css");
  const [counter, setcounter] = useState(0);
  const slides = document.querySelectorAll(".slide");

  const slideImage = () => {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    });
  };

  const goNext = () => {
    setcounter(counter + 1);

    if (counter >= slides.length - 1) {
      setcounter(0);
    }
    slideImage();
  };
  const goPrev = () => {
    setcounter(counter - 1);
    if (counter <= 0) {
      setcounter(slides.length - 1);
    }
    slideImage();
  };
  const [flats, setflat] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const queryParameters = new URLSearchParams(window.location.search);

  const fetchProducts = () => {
    const url = "http://komal/getData2?flat=" + queryParameters.get("id");
    axios
      .get(url)
      .then((res) => {
        setflat(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
  const navigate = useNavigate();
  return (
    <motion.div
      animate={{ x: [2000, 0], opacity: 1 }}
      transition={{
        duration: 0.4,
        delay: 0,
        ease: [0, 0, 0, 1],
      }}
      initial={{ x: [0, 0], opacity: 0.5 }}
    >
      <p class="exit_button" onClick={() => navigate(-1)}>
        <img src="icons8-enter-80.png" alt="Exit" id="exit_button" /> Back
      </p>

      {flats.map((flat) => (
        <div className="background">
          <div class="cover"></div>
          {flat.image.map((e) => (
            <div className="slide">
              <img
                className="images"
                src={"http://komal/Images/" + flat.name + "/" + e}
                alt="Property-image"
              />
            </div>
          ))}
          <button class="btn2" id="btnLeft" onClick={goPrev}>
            <img src="left.png" alt="Previous" id="prev" />
          </button>
          <button class="btn2" id="btnRight" onClick={goNext}>
            <img src="right.png" alt="Next" id="next" />
          </button>
          <div class="wrapper">
            <div class="column"></div>
            <div class="cloumn1" id="c1">
              <ul>
                <li id="t">{flat.name}</li>
                <li id="t">{flat.furnished_status}</li>
                <li id="t"></li>
              </ul>
            </div>
            <div class="column1" id="c2">
              <ul>
                <li id="t">
                  {flat.street_name}, {flat.city}, {flat.state}
                </li>
                <li id="t"></li>
                <li id="t">{flat.phone_number}</li>
              </ul>
            </div>
          </div>
          <div class="rent">
            <p>{flat.rent}/Month</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};
