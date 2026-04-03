import './ScoreBox.scss';

function ScoreBox() {
  return (
    <div className='score-box'>
      <div className='score-box__content'>
        <p className='score-box__text'>SCORE</p>
        <div className='score-box__value'>12</div>
      </div>
    </div>
  );
}

export default ScoreBox;
