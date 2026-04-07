import type React from 'react';
import DialogRules from '../molecules/DialogRules';
import './GameContainer.scss';

function GameContainer({ children }: React.PropsWithChildren) {
  return (
    <div className='game-container'>
      {children}
      <DialogRules />
    </div>
  );
}

export default GameContainer;
