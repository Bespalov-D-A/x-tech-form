import { FC, useEffect, useRef, useState } from "react";
import { handlerClickOutside } from "../../utils/clickHandlerOutsideElement";
import logo from "./../../img/other/technology.png";
import s from "./MobileMenu.module.scss";

interface MobileMenuI {
  mobileMenuRef: React.MutableRefObject<HTMLDivElement>;
}

const MobileMenu: FC<MobileMenuI> = (props) => {
  const { mobileMenuRef } = props;
  const [isOpen, setIsOpen] = useState(false);
  const mobileBtn = useRef() as React.MutableRefObject<HTMLInputElement>;

  const openMenu = () => {
    if (!isOpen) mobileMenuRef.current.style.left = "0";
    else mobileMenuRef.current.style.left = "-460px";
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    mobileMenuRef.current.style.left = "-460px";
  };

  const unFocus = (e: any) => {
    handlerClickOutside(e, [mobileMenuRef, mobileBtn], closeMenu);
  };

  useEffect(() => {
    document.addEventListener("mousedown", unFocus);
    return () => document.removeEventListener("mousedown", unFocus);
  }, []);

  return (
    <div className={s.mobile}>
      <img src={logo} alt="" />
      <input
        type="button"
        className={s.menu}
        ref={mobileBtn}
        onClick={openMenu}
      />
    </div>
  );
};

export default MobileMenu;
