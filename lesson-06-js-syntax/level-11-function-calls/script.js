// Level 11 — Call provided function with args (10 calls)
// Helper provided for students; call it 10 times and save results to descriptive consts.


export function reportScore(playerName, score) {
  return playerName + " scored " + score + " points";
}

const avaScoreReport = reportScore("Ava", 0);
const stevenScoreReport = reportScore("Steven",100);
const believeScoreReport = reportScore("Believe",120);
const arsonScoreReport = reportScore("Arson",120);
const marcelScoreReport = reportScore("Marcel",110);
const ashantiScoreReport = reportScore("Ashanti", 100);
const zazScoreReport = reportScore("Zaz", 105);
const louScoreReport = reportScore("Lou",105);
const totScoreReport = reportScore("Tot",105);
const keyScoreReport = reportScore("Key",110);

export default stevenScoreReport;