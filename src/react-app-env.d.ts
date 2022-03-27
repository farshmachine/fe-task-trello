/// <reference types="react-scripts" />

import { ICard } from './components/Card/Card';

declare global {
  interface Window {
    GET_CARDS: Array<ICard>;
  }
}
