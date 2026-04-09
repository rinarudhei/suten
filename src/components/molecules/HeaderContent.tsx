import Logo from '../atoms/Logo';
import ScoreBox from '../atoms/ScoreBox';
import './HeaderContent.scss';

function HeaderContent() {
  return (
    <div className='header-content'>
      <h1 className='heading-one'>
        Suten Game (Rock, Scissor, Paper) Application
      </h1>
      <Logo />
      <ScoreBox />
    </div>
  );
}

export default HeaderContent;
