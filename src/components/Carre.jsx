export default function Carre({ value, onClick }) {
  return (
    <button
      className="w-20 h-20 text-3xl font-bold flex items-center justify-center border border-gray-500"
      onClick={onClick}
    >
      {value}
    </button>
  );
}
