import css from "./Navigation.module.css"

import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
      <nav>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/tasks">
          Tasks
        </NavLink>
      </nav>
    );
}