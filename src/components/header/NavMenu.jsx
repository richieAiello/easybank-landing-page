import NavItem from './NavItem';

const NavMenu = ({ onClick, className }) => {
  return (
    <ul
      className={`w-[min(100%-3rem,375px)] top-[5.5rem] text-center gap-y-6 py-8 bg-green absolute z-20 rounded md:grid ${className}`}
    >
      <NavItem text="Home" path="#" onClick={onClick} />
      <NavItem text="About" path="#" onClick={onClick} />
      <NavItem text="Contact" path="#" onClick={onClick} />
      <NavItem text="Blog" path="#" onClick={onClick} />
      <NavItem text="Careers" path="#" onClick={onClick} />
    </ul>
  );
};
export default NavMenu;