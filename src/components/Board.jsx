export default function Board({ board, onClick }) {
  return (
    <div className="mx-auto w-fit mt-8">
      <div className="flex">
        <Cell value={board[0]} onClick={() => onClick(0)} />
        <Cell value={board[1]} onClick={() => onClick(1)} />
        <Cell value={board[2]} onClick={() => onClick(2)} />
      </div>

      <div className="flex">
        <Cell value={board[3]} onClick={() => onClick(3)} />
        <Cell value={board[4]} onClick={() => onClick(4)} />
        <Cell value={board[5]} onClick={() => onClick(5)} />
      </div>

      <div className="flex">
        <Cell value={board[6]} onClick={() => onClick(6)} />
        <Cell value={board[7]} onClick={() => onClick(7)} />
        <Cell value={board[8]} onClick={() => onClick(8)} />
      </div>
    </div>
  );
}

function Cell({ value, onClick }) {
  return (
    <div
      className="w-16 h-16 border flex items-center justify-center text-3xl cursor-pointer"
      onClick={onClick}
    >
      {value}
    </div>
  );
}
