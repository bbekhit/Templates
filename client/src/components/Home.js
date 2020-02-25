import React from "react";
import { Button } from "./StyledComponents/Example";

const Home = () => {
  return (
    <div style={{ border: "1px solid red", padding: "20px", margin: "20px" }}>
      <div className="row justify-content-start">
        <div className="col-md-6" style={{ border: "1px solid green" }}>
          Hello
        </div>
        <div className="col-md-6" style={{ border: "1px solid purple" }}>
          There
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Home;
