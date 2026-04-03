import logo from '../assets/logo.svg';

function Header() {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <div className='logo'>
          <img src={logo} alt='Logo' />
        </div>
      </div>
    </div>
  );
}

export default Header;
