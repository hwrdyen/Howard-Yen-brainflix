import './App.scss';
import './styles/global.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
