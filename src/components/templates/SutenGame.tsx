import PiecesContainer from '../molecules/PiecesContainer';
import MainGame from '../organisms/MainGame';
import Header from '../organisms/Header';

function SutenGame() {
  return (
    <>
      <Header />
      <MainGame>
        {/* Step 1 */}
        <PiecesContainer />
      </MainGame>
    </>
  );
}

export default SutenGame;
