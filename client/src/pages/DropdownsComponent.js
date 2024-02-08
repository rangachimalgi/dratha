import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/dropdown.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({ title, items }) => {
    const [isHovering, setIsHovering] = useState(false);
  
    return (
      <div className="dropdown" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
        <button className="dropdown-button">
          {title} <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
        </button>
        {isHovering && (
          <div className="dropdown-content">
            {items.map((item, index) => (
              <Link key={index} to={item.path} className="dropdown-item">
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  

const DropdownsComponent = () => {
  const dropdownItems = [
    {
      title: "Birthday",
      items: [{ label: "Party Ideas", path: "/birthday/party-ideas" }, { label: "Cakes", path: "/birthday/cakes" }],
    },
    {
      title: "Puberty",
      items: [{ label: "Health Tips", path: "/puberty/health-tips" }, { label: "Growth Milestones", path: "/puberty/growth-milestones" }],
    },
    {
      title: "Newborn",
      items: [{ label: "Parenting Guides", path: "/newborn/parenting-guides" }, { label: "Baby Products", path: "/newborn/baby-products" }],
    },
  ];

  return (
    <div className="dropdowns-container">
      {dropdownItems.map((dropdown, index) => (
        <Dropdown key={index} title={dropdown.title} items={dropdown.items} />
      ))}
    </div>
  );
};

export default DropdownsComponent;
