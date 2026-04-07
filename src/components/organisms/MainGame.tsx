import type React from 'react';
import DialogRules from '../molecules/DialogRules';
import './MainGame.scss';

function MainGame({ children }: React.PropsWithChildren) {
  return (
    <main className='main-game'>
      {children}
      <DialogRules />
    </main>
  );
}

export default MainGame;
