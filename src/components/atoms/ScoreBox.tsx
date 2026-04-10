import { useScoreStore } from '../../store/store';
import './ScoreBox.scss';

function ScoreBox() {
  const score = useScoreStore((state) => state.score);
  return (
    <div className='score-box'>
      <div className='score-box__content'>
        <p id='score-label' className='score-box__text'>
          SCORE
        </p>
        <div
          className='score-box__value'
          id='score-value'
          role='status'
          aria-live='polite'
          aria-atomic='true'
          aria-labelledby='score-label score-value'
        >
          {score}
        </div>
      </div>
    </div>
  );
}

export default ScoreBox;
