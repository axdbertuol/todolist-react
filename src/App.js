import './App.css';
import HomePage from './pages/HomePage';
import { Provider as DataProvider } from './contexts/DataContext';

function App() {
  return (
    <DataProvider>
      <HomePage />
    </DataProvider>
  );
}

export default App;
