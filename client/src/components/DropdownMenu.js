import React from "react";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <a href="#home">Link1</a>
        <a href="#home">Link2</a>
        <a href="#home">Link3</a>
        <a href="#home">Link4</a>
      </div>
    </div>
  );
};

export default DropdownMenu;
