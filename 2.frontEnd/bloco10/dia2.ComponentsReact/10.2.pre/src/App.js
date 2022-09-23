import logo from './logo.svg';
import './App.css';
import Image from './image.js'

function App() {
  return (
    <div className="App">
      <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring" /> 
    </div>
  );
}

export default App;


// GABARITO
/* import staringCat from './staringCat.jpg';
import Image from './image.js';

function App() {
  return (
    <main>
      <Image source={staringCat} alternativeText="Cute cat staring" />
    </main>
  );
}

export default App; */