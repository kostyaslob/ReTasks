import { useSelector } from "react-redux";
import css from "./Navigation.module.css"

import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
      <nav className={css.wrapper}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <>
            <NavLink className={css.link} to="/tasks">
              Tasks
            </NavLink>
            <NavLink className={css.link} to="/profile">
              Profile
            </NavLink>
          </>
        )}
      </nav>
    );
}