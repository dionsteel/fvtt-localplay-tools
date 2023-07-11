
export function isGameInitialised(game: {} | Game): game is Game {
  return typeof (game as Game).loading === "boolean";
}
