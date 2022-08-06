import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detailpage from './pages/Detailpages/detailpage';
import Cartpage from './pages/Cart/cartpage';

function App() {
  return (
    <div className="App">
      {/* vô api nhớ nói về midlleware cho a cường  */}
      <BrowserRouter>
        <Routes>

          <Route path="/" caseSensitive={true}
            element={<HomePage />} />
          <Route path="/detailProduct/:id"
            element={<Detailpage />} />

          <Route path="/cart"
            element={<Cartpage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
