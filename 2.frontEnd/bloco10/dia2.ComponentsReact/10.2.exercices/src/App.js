import './App.css';
import Pokemons from './components/Pokemons';
import data from './data'
import Title from './Title';

function App() {
  // console.table(data);
  return (
    <>
    <h1> <Title name='Pokedex'/> </h1>

    <article className ='pokedex'>
      <Pokemons obj={data}/> {/* obj é nome da const q recebe o conteudo de data.js como obj//
      nomeDaProps={valorDaProps} */}
      
    </article>
    </>
  )
}

export default App;