// https://codepen.io/B-Bekhit/pen/VwLzvqq
// https://codepen.io/Murkee/pen/mudJx
import React from "react";

const SlidingCheck = () => {
  return (
    <div style={{ padding: "200px" }}>
      <label className="sliding-label">
        <input type="checkbox" className="sliding-checkbox" />
        <span className="sliding-span"></span>
        <span class="switch-label" data-on="Before" data-off="After"></span>
      </label>
    </div>
  );
};

export default SlidingCheck;
