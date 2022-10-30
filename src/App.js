import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import CategoryListContainer from './components/CategoryListContainer/CategoryListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import RegisterForm from './components/RegisterForm/RegisterForm';
import WelcomeNewUser from './components/WelcomeNewUser/WelcomeNewUser';
import { DataProvider } from './context/DataContext';
import Cart from './components/Cart/Cart';

function App() {
  const brandTitle = 'Random Web Store';

  return (
    <BrowserRouter>
        <DataProvider>
          <Header brandTitle={ brandTitle } />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/category/:catId' element={<CategoryListContainer />} />
            <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route exact path='/register' element={<RegisterForm />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
          <Footer brandTitle={ brandTitle } />
        </DataProvider>
    </BrowserRouter>
  );
}

export default App;
