import React from "react";
const PropsPractice = ({ data }) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div>
            <div className="name">{item.name}</div>
            <div className="mobile">{item.mobile}</div>
          </div>
        );
      })}
    </div>
  );
};
export default PropsPractice;