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
      <ul>
        <li>
          <GamePiece
            className='pieces-container__paper'
            gamePieceType='paper'
            isHoverable
            onClick={() => playerPickTurn('paper')}
          />
        </li>
        <li>
          <GamePiece
            className='pieces-container__scissor'
            gamePieceType='scissor'
            isHoverable
            onClick={() => playerPickTurn('scissor')}
          />
        </li>
        <li>
          <GamePiece
            className='pieces-container__rock'
            gamePieceType='rock'
            isHoverable
            onClick={() => playerPickTurn('rock')}
          />
        </li>
      </ul>
    </div>
  );
}

export default PiecesContainer;
