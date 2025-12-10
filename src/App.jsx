import Board from './components/Board.jsx';
import { useState } from 'react';

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
  };

  return (
    <div className="text-center mt-6">
      <h1 className="text-3xl font-bold mb-4">Morpion</h1>
      <Board board={board} onClick={handleClick} />
    </div>
  );
}
