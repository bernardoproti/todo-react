import './global.css';
import { Header } from './components/Header';
import { Input } from './components/Input';

export function App() {
  return (
    <div>
      <Header />
      <main>
        <header>
          <Input />
        </header>
        <footer>

        </footer>
      </main>
    </div>
  );
}