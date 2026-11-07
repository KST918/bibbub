import Grid from './components/Grid';
import { cards } from './data/data';

export default function App() {
  return (
    <section className="game">
      <h1 className="game-title">Ви під кібератакою</h1>
      <Grid cards={cards} />
    </section>
  );
}
