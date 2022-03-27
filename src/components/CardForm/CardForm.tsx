import { FormEvent, useCallback } from 'react';
import './cardform.css';

interface ICardFormProps {
  onSubmit: (v: string) => void;
}

type TFormTarget = HTMLFormElement & { text: HTMLInputElement };

export default function CardForm({ onSubmit }: ICardFormProps) {
  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const input = (e.target as TFormTarget).text;
      onSubmit(input.value);
      input.value = '';
    },
    [onSubmit],
  );

  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea className="input" name="text" />
      <button type="submit" className="button">Add</button>
    </form>
  );
}
