import clsx from 'clsx';
import './GamePiece.scss';
import type { GamePieceType } from '../../types/types';
import Paper from '../../assets/piece-paper-sm.svg';
import Scissor from '../../assets/piece-scissor-sm.svg';
import Rock from '../../assets/piece-rock-sm.svg';
import Lizard from '../../assets/piece-lizard-xs.svg';
import Spock from '../../assets/piece-spock-xs.svg';

type GamePieceProps = {
  size?: 'sm-1' | 'lg-1' | 'lg-2' | 'lg-3' | 'xl-3';
  isWinner?: boolean;
  isHoverable?: boolean;
  type: GamePieceType;
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
}: GamePieceProps) {
  return (
    <div className={clsx('game-piece', size, isWinner && 'winner')}>
      <img
        className={clsx('game-piece__img', isHoverable && 'hoverable')}
        src={imageMap[type]}
        alt='game piece '
      />
      <div className='hover-light' />
    </div>
  );
}

export default GamePiece;
