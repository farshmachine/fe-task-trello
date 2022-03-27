import Card, { ICard } from '../Card/Card';
import './cardlist.css';

interface ICardListProps {
  items: Array<ICard>;
}

export default function CardList({ items }: ICardListProps) {
  return (
    <ul className="list">
      {items.map((item) => (
        <Card key={item.pos} item={item} />
      ))}
    </ul>
  );
}
