import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CategoryListContainer from './components/CategoryListContainer/CategoryListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  const brandTitle = 'Random Web Store';

  return (
    <BrowserRouter>
      <div className='h-full w-11/12 ml-auto mr-auto'>
        <NavBar brandTitle={ brandTitle } />
        <Routes>
          <Route exact path='/' element={<Home brandTitle={ brandTitle } />} />
          <Route exact path='/category/:catId' element={<CategoryListContainer />} />
          <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
        <Footer brandTitle={ brandTitle } />
      </div>
    </BrowserRouter>
  );
}

export default App;
