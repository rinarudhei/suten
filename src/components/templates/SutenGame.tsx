import React from 'react';
import PiecesContainer from '../molecules/PiecesContainer';
import MainGame from '../organisms/MainGame';
import Header from '../organisms/Header';
import PreStepTwo from '../organisms/PreStepTwo';
import type { GamePieceType, GameResultType } from '../../types/types';
import pickRandomPiece from '../../utils/gameEngine';
import StepThree from '../organisms/StepThree';
import DialogRules from '../molecules/DialogRules';
import { useScoreStore } from '../../store/store';

function SutenGame() {
  const [step, setStep] = React.useState<1 | 1.5 | 2 | 3>(1);
  const [selectedPiece, setSelectedPiece] =
    React.useState<GamePieceType | null>(null);

  const [opponentPiece, setOpponentPiece] = React.useState<
    GamePieceType | undefined
  >(undefined);

  const [resultType, setResultType] = React.useState<
    GameResultType | undefined
  >(undefined);

  const increaseScore = useScoreStore((state) => state.increaseScore);

  const playerPickTurn = React.useCallback((piece: GamePieceType) => {
    setSelectedPiece(piece);
    setStep(2);
  }, []);

  const setLastStep = React.useCallback(() => {}, []);

  const resetGame = React.useCallback(() => {
    setSelectedPiece(null);
    setOpponentPiece(undefined);
    setResultType(undefined);
    setStep(1);
  }, []);

  React.useEffect(() => {
    if (step !== 2) return;

    const timerId = setTimeout(() => {
      const picked = pickRandomPiece();
      setOpponentPiece(picked);
    }, 2000);

    return () => {
      clearTimeout(timerId);
    };
  }, [step]);

  React.useEffect(() => {
    if (!selectedPiece) return;

    if (opponentPiece) {
      setResultType(() => {
        if (selectedPiece === opponentPiece) return 'draw';
        if (
          (selectedPiece === 'paper' && opponentPiece === 'scissor') ||
          (selectedPiece === 'rock' && opponentPiece === 'paper') ||
          (selectedPiece === 'scissor' && opponentPiece === 'rock')
        ) {
          return 'lose';
        }

        return 'win';
      });

      const timerId = setTimeout(() => {
        setStep(3);
      }, 2000);

      return () => {
        clearInterval(timerId);
      };
    }
  }, [selectedPiece, opponentPiece]);

  React.useEffect(() => {
    if (resultType === 'win') {
      increaseScore();
    }
  }, [resultType]);
  return (
    <>
      <Header />
      <MainGame>
        {step === 1 ? (
          <PiecesContainer playerPickTurn={playerPickTurn} />
        ) : step === 2 ? (
          <PreStepTwo
            selectedPiece={selectedPiece as GamePieceType}
            opponentPiece={opponentPiece}
          />
        ) : (
          <StepThree
            selectedPiece={selectedPiece as GamePieceType}
            opponentPiece={opponentPiece as GamePieceType}
            gameResultType={resultType as GameResultType}
            resetGame={resetGame}
          />
        )}
      </MainGame>
      <DialogRules />
    </>
  );
}

export default SutenGame;
