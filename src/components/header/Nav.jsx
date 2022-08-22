import { useState, useEffect } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';
import NavShadow from './NavShadow';
import clsx from 'clsx';

const Nav = props => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [loading, setLoading] = useState(false);

  const desktop = useMediaQuery('(min-width: 1440px)');

  useEffect(() => {
    if (desktop) {
      setMenuVisibility(false);
      setHidden(true);
    }
  }, [desktop]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      animateIn && setAnimateIn(false);
      animateOut && setAnimateOut(false);
      !menuVisibility && setHidden(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [menuVisibility]);

  const handleHamburgerClick = e => {
    setLoading(true);
    setMenuVisibility(!menuVisibility);
    hidden && setHidden(false);
    menuVisibility ? setAnimateOut(true) : setAnimateIn(true);
  };

  const handleLinkClick = e => {
    if (window.innerWidth < 768) {
      handleHamburgerClick();
    }
  };

  return (
    <nav className="container flex justify-between items-center">
      <img src="./images/logo.svg" alt="" />
      <Hamburger
        className={clsx({
          flip: menuVisibility,
        })}
        onClick={handleHamburgerClick}
        disabled={loading}
      />
      <NavMenu
        className={clsx({
          hidden: hidden,
          grid: !hidden,
          'slide-in': animateIn,
          'slide-out': animateOut,
        })}
        onClick={handleLinkClick}
      />
      <NavShadow
        className={clsx({
          hidden: hidden,
          block: !hidden,
          'fade-in': animateIn,
          'fade-out': animateOut,
        })}
        onClick={handleHamburgerClick}
      />
      <a href="#" className="btn hidden lg:block">
        Request Invite
      </a>
    </nav>
  );
};

export default Nav;
