import { Provider } from 'react-redux';
import './App.css';
import Player from './components/Player';
import Sidebar from './components/Sidebar';
import store from './store';

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <h1>Movie Cards Redux</h1>
        <main>
          <Sidebar/>
          <Player/>
        </main>
    </div>
    </Provider>
  );
}

export default App;
