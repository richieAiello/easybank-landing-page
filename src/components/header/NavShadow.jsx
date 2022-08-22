const NavShadow = props => {
  return (
    <div
      className={`
        shadow-gradient w-screen h-[calc(100vh-4rem)]
        absolute top-16 left-0 z-10
        ${props.className}
        lg:hidden
      `}
      onClick={props.onClick}
    />
  );
};

export default NavShadow;
