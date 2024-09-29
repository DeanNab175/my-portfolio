import Link from "next/link";
import styles from "./navbar.module.scss";

const navLinks = [
  {
    id: "home",
    url: "/",
    label: "Home",
  },
  {
    id: "about",
    url: "/about",
    label: "About",
  },
  {
    id: "skills",
    url: "/skills",
    label: "Skills",
  },
  {
    id: "portfolio",
    url: "/portfolio",
    label: "Portfolio",
  },
  {
    id: "contact",
    url: "/contact",
    label: "Contact",
  },
];

function Navbar() {
  return (
    <div className={styles.navbar}>
      {navLinks.map((nav) => (
        <Link key={nav.id} href={nav.url}>
          {nav.label}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
