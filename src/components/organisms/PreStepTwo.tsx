import type { GamePieceType } from '../../types/types';
import GamePiece from '../atoms/GamePiece';
import PieceCard from '../atoms/PieceCard';
import PiecePlaceholder from '../atoms/PiecePlaceholder';
import './PreStepTwo.scss';

type PreStepTwoProps = {
  selectedPiece: GamePieceType;
};
function PreStepTwo({ selectedPiece }: PreStepTwoProps) {
  return (
    <div className='pre-step-two'>
      <PieceCard playerType='current'>
        <GamePiece
          className='selected-piece'
          size='sm-2'
          type={selectedPiece}
        />
      </PieceCard>

      <PieceCard playerType='opponent'>
        <PiecePlaceholder />
      </PieceCard>
    </div>
  );
}

export default PreStepTwo;
