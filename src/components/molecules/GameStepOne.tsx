import GamePiece from '../atoms/GamePiece';
import PiecesConnector from '../atoms/PiecesConnector';
import './GameStepOne.scss';

function GameStepOne() {
  return (
    <div className='gstep-one'>
      <PiecesConnector />
      <GamePiece className='gstep-one__paper' type='paper' isHoverable />
      <GamePiece className='gstep-one__scissor' type='scissor' isHoverable />
      <GamePiece className='gstep-one__rock' type='rock' isHoverable />
    </div>
  );
}

export default GameStepOne;
