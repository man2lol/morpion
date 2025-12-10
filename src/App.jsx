import Board from './components/Board.jsx';
import { useState } from 'react';

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="text-center mt-6">
      <h1 className="text-3xl font-bold mb-4">Morpion</h1>
      <p className="text-xl mb-4">
        Prochain joueur : <strong>{isXNext ? 'X' : 'O'}</strong>
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
