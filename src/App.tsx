import { useCallback, useEffect, useState } from 'react';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import CardForm from './components/CardForm/CardForm';
import CardList from './components/CardList/CardList';
import { ICard } from './components/Card/Card';
import { checkPosExpandNeeded, expandCardPosValues, getMeanPos } from './utils/utils';
import './app.css';

const INITIAL_POS = 65535;
const SHIFT_VALUE = 1;

function App() {
  const [cards, setCards] = useState<Array<ICard>>([]);

  useEffect(() => {
    if (window && typeof window === 'object') {
      window.GET_CARDS = cards;
    }
  }, [cards]);

  const addCard = useCallback(
    (content) => {
      const lastCard = cards[cards.length - 1];
      const posGap = INITIAL_POS + SHIFT_VALUE;
      const cardPos = lastCard ? lastCard.pos + posGap : INITIAL_POS;
      setCards(cards.concat({ content, pos: cardPos }));
    },
    [cards],
  );

  const handleDragEnd = useCallback((result: DropResult) => {
    const { destination, source } = result;

    // Do nothing if dropped outside droppable area
    if (!destination) {
      return null;
    }

    // Do nothing if card didn't change position
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return null;
    }

    const newCards = Array.from(cards);
    const droppedCardIndex = source.index;
    const droppedPosition = destination.index;
    const prevCardIndex = droppedPosition - 1;
    const droppedCard = newCards[droppedCardIndex];
    const nextCardPos = newCards[droppedPosition].pos;
    const isNotFirstCard = droppedPosition !== 0;
    const prevCardPos = isNotFirstCard ? newCards[prevCardIndex].pos : 0;
    const newPos = getMeanPos(nextCardPos, prevCardPos);
    const newCard = { ...droppedCard, pos: newPos };

    // insert moved card to dropped position
    newCards.splice(source.index, 1);
    newCards.splice(destination.index, 0, newCard);

    // check if pos values are too close to each other
    const needsReaarage = checkPosExpandNeeded(
      newCards[destination.index],
      newCards[destination.index + 1],
    );

    // rearange card if needed
    const rearangedCards = needsReaarage ? expandCardPosValues(newCards, INITIAL_POS) : newCards;

    setCards(rearangedCards);

    return null;
  }, [cards, INITIAL_POS]);

  return (
    <main className="app">
      <DragDropContext onDragEnd={handleDragEnd}>
        <CardList items={cards} />
        <CardForm onSubmit={addCard} />
      </DragDropContext>
    </main>
  );
}

export default App;
