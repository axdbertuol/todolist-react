import React from "react";

const ListItem = () => {
  return (
    <li className="list-item">
      <input type="checkbox" className="list-item-check" />
      <p className="list-item-text"></p>
      <button className="list-item-icon" type="button"></button>
    </li>
  );
};

export default ListItem;
