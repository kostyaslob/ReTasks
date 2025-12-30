import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";  
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";

export default function Header() {
    return (
        <header className={css.header}>
            <Navigation />
            <UserMenu />
            <AuthNav />
        </header>
    )
}
