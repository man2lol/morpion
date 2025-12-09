export default function ScoreBoard({ score1, score2 }) {
  return (
    <div className="flex justify-center gap-10 text-xl font-bold mt-4">
      <p>Joueur 1 : {score1}</p>
      <p>Joueur 2 : {score2}</p>
    </div>
  );
}
