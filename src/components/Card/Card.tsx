import { Draggable, DraggableProvided } from 'react-beautiful-dnd';
import './card.css';

export interface ICard {
  content: string;
  pos: number;
}

interface ICardProps {
  item: ICard;
  index: number;
}

export default function Card({ item, index }: ICardProps) {
  const { content, pos } = item;
  return (
    <Draggable draggableId={item.pos.toString()} index={index}>
      {(provided: DraggableProvided) => (
        <li className="card" {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
          {content}
          <span className="pos">
            pos:
            {' '}
            {pos}
          </span>
        </li>
      )}
    </Draggable>
  );
}
