import type { GamePieceType } from '../../types/types';
import GamePiece from '../atoms/GamePiece';
import PiecesConnector from '../atoms/PiecesConnector';
import './PiecesContainer.scss';

type PiecesContainerProps = {
  playerPickTurn: (piece: GamePieceType) => void;
};
function PiecesContainer({ playerPickTurn }: PiecesContainerProps) {
  return (
    <div className='pieces-container'>
      <PiecesConnector />
      <GamePiece
        className='pieces-container__paper'
        type='paper'
        isHoverable
        onClick={() => playerPickTurn('paper')}
      />
      <GamePiece
        className='pieces-container__scissor'
        type='scissor'
        isHoverable
        onClick={() => playerPickTurn('scissor')}
      />
      <GamePiece
        className='pieces-container__rock'
        type='rock'
        isHoverable
        onClick={() => playerPickTurn('rock')}
      />
    </div>
  );
}

export default PiecesContainer;
