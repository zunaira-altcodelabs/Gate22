import { IoIosClose } from "react-icons/io";
import clsx from "clsx";
import MobileCategoryMenuNav from "./MobileCategoryMenuNav";

const MobileCategoryMenu = ({ activeStatus, getActiveStatus }) => {
  return (
    <div className={clsx("offcanvas-mobile-menu offcanvas-mobile-menu--style-two", activeStatus && "active")}>
      <div
        className="offcanvas-mobile-menu__overlay-close"
        onClick={() => getActiveStatus(false)}
      />
      <div className="offcanvas-mobile-menu__wrapper">
        <button
          className="offcanvas-mobile-menu__close"
          onClick={() => getActiveStatus(false)}
        >
          <IoIosClose />
        </button>
        <div className="offcanvas-mobile-menu__content-wrapper">
          <div className="offcanvas-mobile-menu__content">
            {/* mobile nav menu */}
            <MobileCategoryMenuNav getActiveStatus={getActiveStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCategoryMenu;
