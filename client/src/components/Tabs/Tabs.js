import React, { useState } from "react";

const Tabs = () => {
  const [city, setCity] = useState("");
  const cities = [
    {
      name: "Usa",
      Content: "this is USA"
    },
    {
      name: "Japan",
      Content: "this is Japan"
    },
    {
      name: "France",
      Content: "this is France"
    }
  ];

  const getCity = cityName => {
    setCity(cityName);
  };
  // const getContent = () => {
  //   let cityItem = cities.filter(item => item.name === city)[0];

  //   if (cityItem) {
  //     return cityItem.Content;
  //   }
  // };
  const getContentComponent = () => {
    let previewItem = document.querySelector(".preview");
    if (previewItem && city) {
      previewItem.classList.add("bg-preview");
    }
    switch (city) {
      case "Usa":
        return <Usa />;
      case "Japan":
        return <Japan />;
      case "France":
        return <France />;
      default:
        return "";
    }
  };
  const Usa = () => {
    return <div>This is USA</div>;
  };
  const France = () => {
    return <div>This is France</div>;
  };
  const Japan = () => {
    return <div>This is Japan</div>;
  };
  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        <ul>
          {cities.map((item, i) => (
            <li
              key={i}
              // onClick={() => getCity(item.name)}
              onMouseEnter={() => getCity(item.name)}
              className={city === item.name ? "bg-preview" : ""}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="preview">
        {/* {getContent()} */}
        {getContentComponent()}
      </div>
    </div>
  );
};

export default Tabs;
