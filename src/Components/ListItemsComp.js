import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
const ListItemsComp = () => {
  return (
    <div>
      <ul className="list">
        <li style={{textDecoration: "none !important"}}>
          <NavLink to="/todo" activeClassName="selected"
            activeStyle={{textDecoration: "none", color: "cyan",  backgroundColor: "yellow"}}
          >
            Todo
          </NavLink>
        </li>
        <li>
          <NavLink to="/counter" activeClassName="selected"
          activeStyle={{textDecoration: "none", color: "cyan", backgroundColor: "yellow"}}
          >
            Counter
          </NavLink>
        </li>
        <li>
          <NavLink to="/form" activeClassName="selected"
          // activeStyle={{textDecoration: "none", color: "cyan"}}
          >
            Form
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default ListItemsComp;
