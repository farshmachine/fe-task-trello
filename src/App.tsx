import { useCallback, useState } from 'react';
import CardForm from './components/CardForm/CardForm';
import CardList from './components/CardList/CardList';
import { ICard } from './components/Card/Card';
import './app.css';

const INITIAL_POS = 65535;

function App() {
  const [cards, setCards] = useState<Array<ICard>>([]);

  const addCard = useCallback(
    (content) => {
      const lastCard = cards[cards.length - 1];
      const cardPos = lastCard ? lastCard.pos + INITIAL_POS + 1 : INITIAL_POS;
      setCards(cards.concat({ content, pos: cardPos }));
    },
    [cards],
  );
  return (
    <main className="app">
      <CardList items={cards} />
      <CardForm onSubmit={addCard} />
    </main>
  );
}

export default App;
