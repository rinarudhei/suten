import type { GamePieceType, GameResultType } from '../../types/types';
import GamePiece from '../atoms/GamePiece';
import PieceCard from '../atoms/PieceCard';
import PiecePlaceholder from '../atoms/PiecePlaceholder';
import GameResult from '../molecules/GameResult';
import './StepThree.scss';

type StepThreeProps = {
  gameResultType: GameResultType;
  selectedPiece: GamePieceType;
  opponentPiece: GamePieceType;
  resetGame: () => void;
};
function StepThree({
  gameResultType,
  selectedPiece,
  opponentPiece,
  resetGame,
}: StepThreeProps) {
  return (
    <div className='step-three'>
      <div className='step-three__pieces'>
        <PieceCard playerType='current' isStepThree>
          <GamePiece
            className='selected-piece'
            size='sm-3'
            type={selectedPiece}
            isWinner={gameResultType === 'win'}
          />
        </PieceCard>

        <GameResult
          className='result-inner'
          gameResultType={gameResultType}
          resetGame={resetGame}
        />

        <PieceCard playerType='opponent' isStepThree>
          {opponentPiece ? (
            <GamePiece
              className='selected-piece'
              size='sm-3'
              type={opponentPiece}
              isWinner={gameResultType === 'lose'}
            />
          ) : (
            <PiecePlaceholder />
          )}
        </PieceCard>
      </div>
      <GameResult
        className='result-outer'
        gameResultType={gameResultType}
        resetGame={resetGame}
      />
    </div>
  );
}

export default StepThree;
