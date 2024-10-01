import styles from "./nav-link.module.scss";
import Link from "next/link";
import { NavLinkType } from "../navbar/navbar-items";

interface NavLinkProps {
  nav: NavLinkType;
}

function NavLink({ nav }: NavLinkProps) {
  return (
    <Link href={nav.url} className={styles.navbar__link}>
      <span className={styles.navbar__icon}>{nav.icon}</span>
      <span className="navbar__text">{nav.label}</span>
    </Link>
  );
}

export default NavLink;
