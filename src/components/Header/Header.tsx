import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";  
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthMenu/AuthNav";

export default function Layout() {
    return (
        <header className={css.header}>
            <Navigation />
            <UserMenu />
            <AuthNav />
        </header>
    )
}
