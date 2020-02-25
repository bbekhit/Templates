import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState("");
  const [isOpenItems, setIsOpenItems] = useState([]);

  const getPosition = name => {
    let cloneIsOpenItems = [...isOpenItems];
    let indexOfName = isOpenItems.indexOf(name);

    if (indexOfName === -1) {
      cloneIsOpenItems.push(name);
    } else {
      cloneIsOpenItems.splice(indexOfName, 1);
    }
    console.log("notState", cloneIsOpenItems);
    setIsOpenItems(cloneIsOpenItems);
    console.log("state", isOpenItems);
  };

  let arr = [
    {
      name: "Section 1",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "
    },
    {
      name: "Section 2",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "
    },
    {
      name: "Section 3",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco "
    }
  ];
  return (
    <div className="wrapper">
      {arr.map(item => (
        <div className="accordion" key={item.name}>
          <div className="header">
            <div className="name">{item.name}</div>
            <div className="icon">
              <FaPlus onClick={() => getPosition(item.name)} />
            </div>
          </div>
          <div
            className={`body ${isOpenItems.includes(item.name) ? "open" : ""}`}
          >
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
