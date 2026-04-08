import clsx from 'clsx';
import type { GameResultType } from '../../types/types';
import Button from '../atoms/Button';
import './GameResult.scss';

type GameResultProps = {
  gameResultType: GameResultType;
  className?: string;
  resetGame: () => void;
};

const gameResultMap: Record<GameResultType, string> = {
  win: 'YOU WIN',
  lose: 'YOU LOSE',
  draw: 'DRAW',
};

function GameResult({
  gameResultType,
  className = '',
  resetGame,
}: React.ComponentProps<'div'> & GameResultProps) {
  return (
    <div className={clsx('game-result', className)}>
      <p className='game-result__text'>{gameResultMap[gameResultType]}</p>
      <Button
        className='game-result__button'
        variant='primary'
        onClick={resetGame}
      >
        PLAY AGAIN
      </Button>
    </div>
  );
}

export default GameResult;
