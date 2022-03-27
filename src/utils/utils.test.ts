import { ICard } from '../components/Card/Card';
import { checkPosExpandNeeded, expandCardPosValues, getMeanPos } from './utils';

describe('utils tests', () => {
  describe('checkPosExpandNeeded', () => {
    it('should return TRUE if card pos values difference is equals than 0.01', () => {
      const cards: [ICard, ICard] = [
        { pos: 0.05, content: 'card1' },
        { pos: 0.06, content: 'card2' },
      ];

      expect(checkPosExpandNeeded(...cards)).toEqual(true);
    });

    it('should return FALSE if card pos values difference is bigger than 0.01', () => {
      const cards: [ICard, ICard] = [
        { pos: 0.05, content: 'card1' },
        { pos: 0.07, content: 'card2' },
      ];

      expect(checkPosExpandNeeded(...cards)).toEqual(false);
    });
  });
  describe('expandCardPosValues', () => {
    it('should reasign card pos values', () => {
      const cards: Array<ICard> = [
        { pos: 0.05, content: 'card1' },
        { pos: 0.06, content: 'card2' },
        { pos: 1, content: 'card3' },
      ];

      const newCardsPosValues = expandCardPosValues(cards, 1).map(
        (card) => card.pos,
      );

      expect(newCardsPosValues).toEqual([2, 3, 4]);
    });
  });
  describe('getMeanPos', () => {
    it('should calculate avarage value', () => {
      expect(getMeanPos(5, 6)).toEqual(5.5);
    });
  });
});
