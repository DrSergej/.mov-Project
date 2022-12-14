import "./NavBar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [increment, setIncrement] = useState(1);
  const links = [...document.querySelectorAll("nav a")];
  const light = document.querySelector("nav .tubelight");

  useEffect(() => {
    links.forEach((link, index) => {
      if (links[index].classList.contains("active")) {
        light.style.left = `${
          links[index].offsetLeft + light.offsetWidth / 4
        }px`;
      }
      link.addEventListener =
        ("click",
        (e) => {
          setActiveIndex(index);
          let t = setInterval(() => {
            if (activeIndex > currentIndex) setIncrement(1);
            else if (activeIndex < currentIndex) setIncrement(-1);
            setCurrentIndex(currentIndex + increment);

            links[currentIndex].classList.add("active");
            if (currentIndex !== -1) {
              links[currentIndex - increment].classList.remove("active");
            }
            if (currentIndex === activeIndex) {
              e.target.classList.add("active");
              setIncrement(0);
              clearInterval(t);
            }
          }, 50);

          light.style.left = `${e.target.offsetLeft + light.offsetWidth / 4}px`;
        });
    });
  }, [activeIndex, currentIndex, increment, links, light]);

  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a>
              <i className="lni lni-home"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a>
              <i className="lni lni-bookmark"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a>
              <i className="lni lni-circle-plus"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a>
              <i className="lni lni-user"></i>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a>
              <i className="lni lni-cart"></i>
            </a>
          </li>
        </ul>

        <div className="tubelight">
          <div className="light-ray"></div>
        </div>
      </nav>
    </footer>
  );
};

export default NavBar;
