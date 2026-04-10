import LogoUrl from '../../assets/logo.svg';
import './Logo.scss';

function Logo() {
  return (
    <img className='suten-logo' src={LogoUrl} alt='Rock Scissor Paper Logo' />
  );
}

export default Logo;
