import React from "react";
import kws from "../images/clients/kws.png";
import geps from "../images/clients/geps.png";
import protergia from "../images/clients/protergia.png";
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import "../styles/clients.css";


const clientImage = {
  height: "10rem",
  width: "auto",
  mixBlendMode: "colorBurn",
};

const Clients = () => {
  const testimonials = [
    {
      image: img,
      quote:
        "I have thought to celebrate my baby first birthday with them and took initiative for tat. I booked through Druthi Creations ...",
      name: "Sarath",
      location: "Bangalore",
    },
    {
      image: img2,
      quote:
        "The best event management team to get our function done without any hustle. We enquired Druthi Creations ",
      name: "Sharan",
      location: "Bangalore",
    },
    // ... add more testimonials as needed
  ];
  return (
    <div className="mt-8 bg-gray-100">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Our Clients
          </h2>
          <div className="flex justify-center">
            <div className="w-24 border-b-4 border-blue-900"></div>
          </div>
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-blue-900">
            Some of our clients.
          </h2>
        </div>

        <div className="testimonials-container">
          <h2>What Our Clients Say</h2>
          <p>
            We take pride in creating the event and space for our client's
            joyful moments. Here's our clients telling why we are the best event
            organisers in the city.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <img
                  src={testimonial.image}
                  alt={`Avatar of ${testimonial.name}`}
                  className="testimonial-avatar"
                />
                <blockquote>"{testimonial.quote}"</blockquote>
                <p className="testimonial-name">{testimonial.name}</p>
                <p className="testimonial-location">{testimonial.location}</p>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
