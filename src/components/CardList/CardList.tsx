import { Droppable, DroppableProvided } from 'react-beautiful-dnd';
import Card, { ICard } from '../Card/Card';
import './cardlist.css';

interface ICardListProps {
  items: Array<ICard>;
}

export default function CardList({ items }: ICardListProps) {
  return (
    <Droppable droppableId="droppable">
      {(provided: DroppableProvided) => (
        <ul className="list" {...provided.droppableProps} ref={provided.innerRef}>
          {items.map((item, index) => (
            <Card key={item.pos} item={item} index={index} />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
}
