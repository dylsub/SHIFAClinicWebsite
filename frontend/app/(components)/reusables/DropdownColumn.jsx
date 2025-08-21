import React from "react";
import DropDownPanel from "./DropDownPanel";

const DropdownColumn = ({ columnSize, numDropdowns, testArr }) => {
  if (!testArr || testArr.length !== numDropdowns || !testArr.every(item => Array.isArray(item) && item.length === 2)) {
    console.error("Invalid testArr prop. Each element should be an array of length 2 containing buttonText and dropdownText");
    return null;
  }

  return (
    <div>
      {testArr.map((item, index) => (
        <DropDownPanel
          key={index}
          buttonText={item[0]}
          dropdownText={item[1]}
          size={columnSize}
        />
      ))}
    </div>
  );
};

export default DropdownColumn; 