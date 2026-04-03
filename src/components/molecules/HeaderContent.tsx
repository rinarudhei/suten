import Logo from '../atoms/Logo';
import ScoreBox from '../atoms/ScoreBox';
import './HeaderContent.scss';

function HeaderContent() {
  return (
    <div className='header-content'>
      <Logo />
      <ScoreBox />
    </div>
  );
}

export default HeaderContent;
