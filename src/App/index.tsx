import './globals.css';
import User from '../Components/User';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <User name={'John'} />
    </BrowserRouter>
  );
}

export default App;
