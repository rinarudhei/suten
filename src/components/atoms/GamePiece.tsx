import clsx from 'clsx';
import './GamePiece.scss';
import type { GamePieceType } from '../../types/types';
import Paper from '../../assets/piece-paper-sm.svg';
import Scissor from '../../assets/piece-scissor-sm.svg';
import Rock from '../../assets/piece-rock-sm.svg';

type GamePieceProps = {
  gamePieceType: GamePieceType;
  size?: 'xs-1' | 'sm-2' | 'sm-3';
  isWinner?: boolean;
  isHoverable?: boolean;
  className?: string;
};

const imageMap: Record<GamePieceType, string> = {
  paper: Paper,
  rock: Rock,
  scissor: Scissor,
};

function GamePiece({
  gamePieceType,
  size = 'xs-1',
  isWinner = false,
  isHoverable = false,
  className = '',
  ...props
}: React.ComponentProps<'button'> & GamePieceProps) {
  return (
    <button
      className={clsx(
        'game-piece',
        className,
        'unstyled-button',
        isHoverable && 'game-piece--hoverable'
      )}
      data-size={size}
      aria-label={`play ${gamePieceType}`}
      {...props}
    >
      <img className={clsx('game-piece__img')} src={imageMap[gamePieceType]} />

      {isHoverable && <div className={clsx('hover-light')} />}
      {isWinner && <div className='winner-light' data-size='xl' />}
      {isWinner && <div className='winner-light' data-size='lg' />}
      {isWinner && <div className='winner-light' data-size='sm' />}
    </button>
  );
}

export default GamePiece;
