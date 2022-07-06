import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className="container-fluid bg-secondary p-2">
            <nav className="navbar navbar-expand-lg">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link text-light ${isActive ? "active text-dark" : ""}`} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link text-light ${isActive ? "active text-dark" : ""}`} to="films">Films</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link text-light ${isActive ? "active text-dark" : ""}`} to="people">People</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link text-light ${isActive ? "active text-dark" : ""}`} to="locations">Locations</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link text-light ${isActive ? "active text-dark" : ""}`} to="vehicles">Vehicles</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({ isActive }) => `nav-link text-light ${isActive ? "active text-dark" : ""}`} to="species">Species</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};