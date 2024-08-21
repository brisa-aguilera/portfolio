import LogoImg from '../../assets/logo.png'; 
import './styles.scss';

export const Logo = () => (
  <figure className='Logo'>
    <img src={LogoImg} alt='Brisa' />
  </figure>
);

export default Logo;