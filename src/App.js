import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const brandTitle = 'Random Web Store';

  const sideCartSettings = {
    drawerId: "appDrawer",
  }

  const name = 'Sergio';

  return (
    <BrowserRouter>
      <div className='h-full'>
        <NavBar brandTitle={ brandTitle } />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/categories' element={<ItemListContainer greeting="Categories list" />} />
          <Route exact path='/categories/:cat_id' element={<ItemListContainer greeting="Single category" />} />
          <Route exact path='/articles' element={<ItemListContainer greeting="Articles list" />} />
          <Route exact path='/articles/:article_id' element={<ItemListContainer greeting="Single article" />} />
          <Route exact path='/cart' element={<ItemListContainer greeting="Shopping cart" />} />
        </Routes>
        <Footer brandTitle={ brandTitle } />
      </div>
    </BrowserRouter>
  );
}

export default App;
