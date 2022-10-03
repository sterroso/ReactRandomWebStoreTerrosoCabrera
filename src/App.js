import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const brandTitle = 'Random Web Store';

  const sideCartSettings = {
    drawerId: "appDrawer",
  }

  const name = 'Sergio';

  return (
    <div className='drawer drawer-end'>
      <input id={ sideCartSettings.drawerId } type="checkbox" className='drawer-toggle' />

      <div className='drawer-content'>
        <NavBar drawerId={ sideCartSettings.drawerId } brandTitle={ brandTitle } />
      </div>

      <ItemListContainer greeting={ name } drawerId={ sideCartSettings.drawerId } />
    </div>
  );
}

export default App;
