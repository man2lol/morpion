import { useState } from 'react';
import Board from './components/Board.jsx';
import Score from './components/ScoreBoard.jsx';

export default function App() {
  const Board = Array(9).fill(null);

  const [board, setBoard] = useState(Board);

  const [winner, setWinner] = useState(null);

  const restartGame = () => {
    setBoard(Board);
    setWinner(null);
    setCurrentPlayer('1');
  };

  const resetAll = () => {
    restartGame();
    setScores({ 1: 0, 2: 0 });
  };

  return (
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold mb-6">Morpion</h1>

      <Score scores={scores} />

      <Board board={board} onClick={Click} />

      {
        <p className="text-xl font-bold mt-4">
          Vainqueur : <span className="text-green-600">{winner}</span>
        </p>
      }

      <div className="flex justify-center gap-4 mt-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={restartGame}
        >
          Rejouer
        </button>

        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800"
          onClick={resetAll}
        >
          Réinitialiser
        </button>
      </div>
    </div>
  );
}
