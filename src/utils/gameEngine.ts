import type { GamePieceType } from '../types/types';

export default function pickRandomPiece(): GamePieceType {
  const pieces = ['paper', 'rock', 'scissor'] as const;
  const rand = Math.floor(Math.random() * 3);

  return pieces[rand];
}
