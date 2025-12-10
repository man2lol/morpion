import Board from './components/Board.jsx';

import { useState } from 'react';

function calculateWinner(board) {
  if (board[0] && board[0] === board[1] && board[1] === board[2])
    return board[0];
  if (board[3] && board[3] === board[4] && board[4] === board[5])
    return board[3];
  if (board[6] && board[6] === board[7] && board[7] === board[8])
    return board[6];

  if (board[0] && board[0] === board[3] && board[3] === board[6])
    return board[0];
  if (board[1] && board[1] === board[4] && board[4] === board[7])
    return board[1];
  if (board[2] && board[2] === board[5] && board[5] === board[8])
    return board[2];

  if (board[0] && board[0] === board[4] && board[4] === board[8])
    return board[0];
  if (board[2] && board[2] === board[4] && board[4] === board[6])
    return board[2];

  return null;
}

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    const win = calculateWinner(newBoard);
    if (win === 'X') setScoreX(scoreX + 1);
    if (win === 'O') setScoreO(scoreO + 1);
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="text-center mt-6">
      <h1 className="text-3xl font-bold mb-4">Morpion</h1>

      <div className="text-xl mb-4">
        <p>
          Score X : <strong>{scoreX}</strong>
        </p>
        <p>
          Score O : <strong>{scoreO}</strong>
        </p>
      </div>

      <p className="text-xl mb-4">
        {winner
          ? ` Le joueur ${winner} a gagné !`
          : `Prochain joueur : ${isXNext ? 'X' : 'O'}`}
      </p>

      <Board board={board} onClick={handleClick} />

      <button
        onClick={resetBoard}
        className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
      >
        Rejouer
      </button>
    </div>
  );
}
