import React from "react";
import img from "../images/Web-developer.svg";
import { Link } from "react-router-dom";
import { FaCameraRetro, FaBirthdayCake, FaGift } from 'react-icons/fa';
import { IoFastFoodOutline } from 'react-icons/io5';
import { MdOutlineRoomService } from 'react-icons/md';
import "../styles/intro.css"

const Intro = () => {
  return (
    <>
      <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6" id="about">
        <div
          className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
          data-aos="fade-up"
        >
          <div className="icon-menu-container">
            <div className="icon-menu-item">
              <MdOutlineRoomService size={50} />
              <p>SERVICES</p>
            </div>
            <div className="icon-menu-item">
              <FaCameraRetro size={50} />
              <p>PHOTOGRAPHY</p>
            </div>
            <div className="icon-menu-item">
              <FaBirthdayCake size={50} />
              <p>CAKES</p>
            </div>
            {/* Repeat for each icon and category you have */}
            <div className="icon-menu-item">
              <FaGift size={50} />
              <p>GIFTS</p>
            </div>
            <div className="icon-menu-item">
              <IoFastFoodOutline size={50} />
              <p>FOOD</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
