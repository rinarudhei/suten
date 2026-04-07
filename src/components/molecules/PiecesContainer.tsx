import GamePiece from '../atoms/GamePiece';
import PiecesConnector from '../atoms/PiecesConnector';
import './PiecesContainer.scss';

function PiecesContainer() {
  return (
    <div className='pieces-container'>
      <PiecesConnector />
      <GamePiece className='pieces-container__paper' type='paper' isHoverable />
      <GamePiece
        className='pieces-container__scissor'
        type='scissor'
        isHoverable
      />
      <GamePiece className='pieces-container__rock' type='rock' isHoverable />
    </div>
  );
}

export default PiecesContainer;
