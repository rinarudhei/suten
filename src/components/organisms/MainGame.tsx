import type React from 'react';
import './MainGame.scss';

function MainGame({ children }: React.PropsWithChildren) {
  return <main className='main-game'>{children}</main>;
}

export default MainGame;
