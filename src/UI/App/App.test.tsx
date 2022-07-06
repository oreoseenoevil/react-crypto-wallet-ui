import ReactDOM from 'react-dom/client';
import { App } from './App';

it('renders with out crashing', () => {
  const div = document.createElement('div');

  const root = ReactDOM.createRoot(div);

  root.render(<App />);
});
