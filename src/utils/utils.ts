import { ICard } from '../components/Card/Card';

/**
 * Checks if pos values of two cards are too close (<= 0.01) to each other
 * @returns `boolean`
 */
export function checkPosExpandNeeded(cardA: ICard, cardB: ICard) {
  return Math.abs(cardA.pos - cardB.pos) <= 0.01;
}

/**
 * Reassigns card pos values
 * @returns `Array<ICard>`
 */

export function expandCardPosValues(cards: Array<ICard>, initialPos: number) {
  return cards.map((card, index) => {
    const multiplier = index + 1;
    const newPos = initialPos * multiplier + 1;
    return {
      ...card,
      pos: newPos,
    };
  });
}
/**
 * Calculates avarage pos value
 * @returns Float number with 2 decimals
 */
export function getMeanPos(pos1: number, pos2: number) {
  return Number(((pos1 + pos2) / 2).toFixed(2));
}
