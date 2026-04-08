import Button from '../atoms/Button';
import './GameResult.scss';

type GameResultProps = {
  isWinner?: boolean;
  isDraw?: boolean;
};

function GameResult({ isWinner = false, isDraw = false }: GameResultProps) {
  return (
    <div className='game-result'>
      <p className='game-result__text'>
        {isWinner ? 'YOU WIN' : isDraw ? 'DRAW' : 'YOU LOSE'}
      </p>
      <Button className='game-result__button' variant='primary'>
        PLAY AGAIN
      </Button>
    </div>
  );
}

export default GameResult;
