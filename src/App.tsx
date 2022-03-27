import CardForm from './components/CardForm/CardForm';
import CardList from './components/CardList/CardList';
import './app.css';

function App() {
  return (
    <main className="app">
      <CardList items={[{ content: 'Hello app', pos: 65535 }, { content: 'Hello card', pos: 165535 }]} />
      <CardForm />
    </main>
  );
}

export default App;
