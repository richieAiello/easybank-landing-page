const NavItem = props => {
  return (
    <li>
      <a
        href={props.path}
        className="text-blue text-[1.125rem] tracking-[-0.14px] leading-[1.375rem] w-max capitalize"
        onClick={props.onClick}
      >
        {props.text}
      </a>
    </li>
  );
};
export default NavItem;
