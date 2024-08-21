import Logo from '../Logo';
import './styles.scss';

export const Header = () => (
  <header className='Header'>
    <div className='Header__logo'>
      <Logo />
      <p>
        Brisa Escobar
      </p>
    </div>
    {/* <Nav /> */}
  </header>
);

export default Header;