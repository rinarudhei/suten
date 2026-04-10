import type React from 'react';
import './MainGame.scss';

function MainGame({ children }: React.PropsWithChildren) {
  return (
    <main className='main-game'>
      <h2 className='heading-two'>Interactive Rock Scissor Paper Game</h2>
      {children}
    </main>
  );
}

export default MainGame;
