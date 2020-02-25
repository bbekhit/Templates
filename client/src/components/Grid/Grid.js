import React from "react";
import img1 from "../../images/mountain1.jpg";
import img2 from "../../images/mountain2.jpg";
import img3 from "../../images/mountain3.jpg";
import img4 from "../../images/mountain4.jpg";

const Grid = () => {
  return (
    <div>
      {/* first  */}
      <div className="test-row">
        <div className="col-1-of-2 one">
          <img src={img1} style={{ height: "100%", width: "100%" }} />
        </div>
        <div className="col-1-of-2 two">
          <img src={img2} style={{ height: "100%", width: "100%" }} />
        </div>
        <div className="col-1-of-2 three">
          <img src={img3} style={{ height: "100%", width: "100%" }} />
        </div>
        <div className="col-1-of-2 four">
          <img src={img4} style={{ height: "100%", width: "100%" }} />
        </div>
      </div>

      {/* Second  */}
      <div className="test-row-2">
        <div className="col-2-of-2 one">
          <img src={img2} style={{ height: "100%", width: "100%" }} />
        </div>
        <div className="col-2-of-2 two">
          <p>
            rem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            {/* remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. */}
          </p>
        </div>
      </div>

      {/* Third  */}
      <div className="row no-gutters">
        <div className="col-md-6 col-sm-12">this is column 1 of 3</div>
        <div className="col-md-6 col-sm-12">this is column 2 of 3</div>
      </div>

      <div className="row-grid">
        <div className="col-1-of-2">Col 1 of 2</div>
        <div className="col-1-of-2">Col 1 of 2</div>
      </div>
      <div className="row-grid">
        <div className="col-1-of-3">Col 1 of 3</div>
        <div className="col-1-of-3">Col 1 of 3</div>
        <div className="col-1-of-3">Col 1 of 3</div>
      </div>
      <div className="row-grid">
        <div className="col-1-of-3">Col 1 of 3</div>
        <div className="col-2-of-3">Col 2 of 3</div>
      </div>
      <div className="row-grid">
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-1-of-4">Col 1 of 4</div>
      </div>
      <div className="row-grid">
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-2-of-4">Col 2 of 4</div>
      </div>
      <div className="row-grid">
        <div className="col-1-of-4">Col 1 of 4</div>
        <div className="col-3-of-4">Col 3 of 4</div>
      </div>
    </div>
  );
};

export default Grid;
