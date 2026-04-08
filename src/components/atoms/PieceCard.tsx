import React from 'react';
import './PieceCard.scss';

type PieceCardProps = {
  playerType: 'current' | 'opponent';
};
function PieceCard({
  children,
  playerType,
}: React.PropsWithChildren & PieceCardProps) {
  return (
    <div className='piece-card'>
      {children}
      <p className='piece-card__title'>
        {playerType === 'current' ? 'YOU PICKED' : 'THE HOUSE PICKED'}
      </p>
    </div>
  );
}

export default PieceCard;
