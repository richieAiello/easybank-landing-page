import Nav from './Nav';

const Header = props => {
  return (
    <header className="fixed w-full top-0 left-0 h-16 flex items-center bg-white">
      <Nav />
    </header>
  );
};

export default Header;
