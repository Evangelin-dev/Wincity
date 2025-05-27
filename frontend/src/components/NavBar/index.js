import { headers } from "next/headers";
import CustomImage from "../custom/Image";
import styles from "./styles.module.css";
import Link from "next/link";
import CustomButton from "../custom/CustomButton";

export const MENU = [
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Our Services",
    link: "/services",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
  {
    name: "Contact Us",
    link: "/#contactUs",
  },
];

const NavBar = async () => {
  const headersList = await headers();
  return (
    <div className="">
      <nav
        className="navbar navbar-expand-sm sticky-top py-0"
        style={{ background: "white" }}
      >
        <div className="container d-flex align-items-center justify-content-between">
          <Link href="/">
            <div
              className="navbar-brand text-white"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse.show"
            >
              <CustomImage
                src={"/logo.png"}
                wrapperClss={styles.logo_img_container}
                height="auto"
                width="8vw"
              />
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navBarMenu"
            aria-controls="navBarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navBarMenu"
          >
            <ul className="navbar-nav  my-2 my-lg-0 navbar-nav-scroll">
              {MENU.map((menuItem, menuIdx) => {
                return (
                  <li className="nav-item px-1" key={`menu-${menuIdx}`}>
                    <Link
                      className="nav-link nav-dropdown-item"
                      href={`${menuItem.link}`}
                    >
                      {menuItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;