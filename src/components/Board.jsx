export default function Board({ board, onClick }) {
  return (
    <div className="mx-auto w-fit">
      <div className="flex">
        <div
          className="w-20 h-20 flex items-center justify-center border text-3xl cursor-pointer"
          onClick={() => onClick(0)}
        >
          {board[0]}
        </div>

        <div
          className="w-20 h-20 flex items-center justify-center border text-3xl cursor-pointer"
          onClick={() => onClick(1)}
        >
          {board[1]}
        </div>

        <div
          className="w-20 h-20 flex items-center justify-center border text-3xl cursor-pointer"
          onClick={() => onClick(2)}
        >
          {board[2]}
        </div>
      </div>

      <div className="flex">
        <div
          className="w-20 h-20 flex items-center justify-center border text-3xl cursor-pointer"
          onClick={() => onClick(3)}
        >
          {board[3]}
        </div>

        <div
          className="w-20 h-20 flex items-center justify-center border text-3xl cursor-pointer"
          onClick={() => onClick(4)}
        >
          {board[4]}
        </div>

        <div
          className="w-20 h-20 flex items-center justify-center border text-3xl cursor-pointer"
          onClick={() => onClick(5)}
        >
          {board[5]}
        </div>
      </div>

      <div className="flex">
        <div
          className="w-20 h-20 flex items-center justify-center border text-3xl cursor-pointer"
          onClick={() => onClick(6)}
        >
          {board[6]}
        </div>

        <div
          className="w-20 h-20 flex items-center justify-center border text-3xl cursor-pointer"
          onClick={() => onClick(7)}
        >
          {board[7]}
        </div>

        <div
          className="w-20 h-20 flex items-center justify-center border text-3xl cursor-pointer"
          onClick={() => onClick(8)}
        >
          {board[8]}
        </div>
      </div>
    </div>
  );
}
