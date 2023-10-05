import Link from "next/link";
import clsx from "clsx";

const Navigation = ({ positionClass }) => {
  return (
    <nav className="navigation d-none d-lg-block">
      <ul
        className={clsx(
          "d-flex",
          positionClass ? positionClass : "justify-content-end"
        )}
      >
        <li>
          <Link href="/" className="nav-link">
            HOME
          </Link>
        </li>

        <li className="has-children-mega">
          <Link href="/products/grid-left-sidebar" className="nav-link">
            PRODUCTS
          </Link>
        </li>

        <li>
          <Link href="/blog/list-right-sidebar" className="nav-link">
            BLOG
          </Link>
        </li>

        <li>
          <Link href="/other/about-us" className="nav-link">
            ABOUT US
          </Link>
        </li>

        <li>
          <Link href="/other/contact-us" className="nav-link">
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
