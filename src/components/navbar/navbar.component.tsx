import styles from "./navbar.module.scss";
import NavLink from "../nav-link/nav-link.component";
import { navbarItems } from "./navbar-items";

function Navbar() {
  return (
    <header className="navbar">
      <nav>
        <ul className={styles.navbar__list}>
          {navbarItems.map((nav) => (
            <li key={nav.id} className="navbar__item">
              <NavLink nav={nav} />
            </li>
          ))}
          <div
            className="navbar__indicator"
            style={{ left: "0", top: "0" }}
          ></div>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
