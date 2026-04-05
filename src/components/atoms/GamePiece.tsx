import clsx from 'clsx';
import './GamePiece.scss';
import type { GamePieceType } from '../../types/types';
import Paper from '../../assets/piece-paper-sm.svg';
import Scissor from '../../assets/piece-scissor-sm.svg';
import Rock from '../../assets/piece-rock-sm.svg';
import Lizard from '../../assets/piece-lizard-xs.svg';
import Spock from '../../assets/piece-spock-xs.svg';

type GamePieceProps = {
  type: GamePieceType;
  size?: 'sm-1' | 'lg-1' | 'lg-2' | 'lg-3' | 'xl-3';
  isWinner?: boolean;
  isHoverable?: boolean;
  className?: string;
};

const imageMap: Record<GamePieceType, string> = {
  paper: Paper,
  rock: Rock,
  scissor: Scissor,
  lizard: Lizard,
  spock: Spock,
};

function GamePiece({
  size = 'sm-1',
  isWinner = false,
  isHoverable = false,
  type,
  className = '',
  ...props
}: React.ComponentProps<'div'> & GamePieceProps) {
  return (
    <div className={clsx('game-piece', className)} data-size={size} {...props}>
      <img
        className={clsx('game-piece__img', isHoverable && 'hoverable')}
        src={imageMap[type]}
        alt='game piece '
      />

      <div className={clsx(isHoverable && 'hover-light')} />
    </div>
  );
}

export default GamePiece;
