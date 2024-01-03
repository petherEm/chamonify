import Link from "next/link";

const links = [
  {
    path: "/",
    pathname: "Home",
  },
  {
    path: "/",
    pathname: "Find Hotel",
  },
  {
    path: "/",
    pathname: "About us",
  },
  {
    path: "/",
    pathname: "Contact us",
  },
];

const Nav = ({ containerSyles, listStyles }) => {
  return (
    <nav className={`${containerSyles}`}>
      <ul className={`${listStyles}`}>
        {links.map((link) => {
          return (
            <li>
              <Link href={link.path}>{link.pathname}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
