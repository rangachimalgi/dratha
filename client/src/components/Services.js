import React from "react";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import img4 from "../images/consultation.svg";
import { FaRegCalendarCheck, FaQuoteRight, FaBullhorn } from "react-icons/fa";
import "../styles/services.css";

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="cardIcon">{icon}</div>
      <h3 className="cardTitle">{title}</h3>
      <p className="cardDescription">{description}</p>
    </div>
  );
};

const ServiceCard = ({ image, title, price }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-image" />
      <h3 className="service-title">{title}</h3>
      <p className="service-price">{price}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      image: img,
      title: "Birthday Decorations",
      price: "From ₹6999 Onwards",
    },
    {
      image: img2,
      title: "Baby Shower Decorations",
      price: "From ₹12999 Onwards",
    },
    {
      image: img3,
      title: "Housewarming Decoration",
      price: "From ₹19999 Onwards",
    },
  ];
  return (
    <div id="services" className="bg-gray-100 py-12">
      <section data-aos="zoom-in-down">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            How it Works
          </h2>

          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Get Druthi creations event experts on board in 3 easy steps to get
            your celebration mode on!
          </h2>
        </div>

        <div className="featuresContainer">
          <Card
            icon={<FaRegCalendarCheck size={50} color="#E91E63" />}
            title="Plan your Event"
            description="Send us your event details and we will plan everything to perfection to your preferences."
          />
          <Card
            icon={<FaQuoteRight size={50} color="#FFC107" />}
            title="Get a Quote"
            description="Get a transparent and comprehensive quote of all anticipated expenses and miscellaneous."
          />
          <Card
            icon={<FaBullhorn size={50} color="#00BCD4" />}
            title="Celebrate your Events"
            description="Sit back and celebrate your event with loved ones as Homevents takes care of everything else."
          />
          {/* Add more cards as needed */}
        </div>
      </section>

      <section>
        <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
          <div
            className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left"
            data-aos="zoom-out"
          ></div>
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Decorations
          </h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
