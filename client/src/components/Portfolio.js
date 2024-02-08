import React from 'react';
import { Link } from 'react-router-dom';
import img from "../images/web.svg";
import img2 from "../images/app.svg";
import img3 from "../images/hosting.svg";
import "../styles/portfolio.css";

const Portfolio = () => {

    const trends = [
        {
          image: img,
          title: 'Birthday Decorations',
          price: 'From ₹7999 Onwards',
        },
        {
          image: img2,
          title: 'New Born Photography',
          price: 'From ₹12999 Onwards',
        },
        {
          image: img3,
          title: 'Birthday Cakes',
          price: 'From ₹4999 Onwards',
        },
        {
          image: img3,
          title: 'Wedding Return Gifts',
          price: 'From ₹199 Onwards',
        },
      ];
    return (
        <>
            <div className="my-4 py-4" id='portfolio'>
                <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">Products</h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 mb-8'></div>
                </div>

                <div className="trending-container">
      <h2>Trending Now</h2>
      <p>Check out the latest trends in décor and gifting over a range of occasions, and let your celebration become a hit with your friends and family.</p>
      <div className="trend-grid">
        {trends.map((trend, index) => (
          <div key={index} className="trend-card">
            <img src={trend.image} alt={trend.title} />
            <h3>{trend.title}</h3>
            <p>{trend.price}</p>
          </div>
        ))}
      </div>
    </div>
            </div>
        </>
    )
}

export default Portfolio;