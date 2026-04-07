import PiecesContainer from '../molecules/PiecesContainer';
import GameContainer from '../organisms/GameContainer';
import Header from '../organisms/Header';

function GameStepOne() {
  return (
    <>
      <Header />
      <GameContainer>
        <PiecesContainer />
      </GameContainer>
    </>
  );
}

export default GameStepOne;
