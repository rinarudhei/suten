import { useScoreStore } from '../../store/store';
import './ScoreBox.scss';

function ScoreBox() {
  const score = useScoreStore((state) => state.score);
  return (
    <div className='score-box'>
      <div className='score-box__content'>
        <p className='score-box__text'>SCORE</p>
        <div className='score-box__value'>{score}</div>
      </div>
    </div>
  );
}

export default ScoreBox;
