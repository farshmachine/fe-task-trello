import './card.css';

export interface ICard {
  content: string;
  pos: number;
}

interface ICardProps {
  item: ICard;
}

export default function Card({ item }: ICardProps) {
  const { content, pos } = item;
  return (
    <li className="card">
      {content}
      <span className="pos">
        pos:
        {' '}
        {pos}
      </span>
    </li>
  );
}
