import React from 'react';
import './PieceCard.scss';
import clsx from 'clsx';

type PieceCardProps = {
  playerType: 'current' | 'opponent';
  isStepThree?: boolean;
};
function PieceCard({
  children,
  playerType,
  isStepThree = false,
}: React.PropsWithChildren & PieceCardProps) {
  return (
    <div className={clsx('piece-card', isStepThree && 'mode-three')}>
      {children}
      <p className='piece-card__title'>
        {playerType === 'current' ? 'YOU PICKED' : 'THE HOUSE PICKED'}
      </p>
    </div>
  );
}

export default PieceCard;
