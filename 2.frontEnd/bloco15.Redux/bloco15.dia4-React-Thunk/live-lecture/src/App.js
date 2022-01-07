import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import ISSLocation from './components/ISSLocation';
import { requestISSLocationThunk } from './redux/actions';

class App extends React.Component {
  componentDidMount() {
    const { getISSLocation } = this.props;
    getISSLocation();
    setInterval(() => {}, 1000);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>International Space Station Location Tracker</h1>
        <Header />
        <ISSLocation />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // o dispatch recebe a execucao do thunk
  getISSLocation: () => dispatch(requestISSLocationThunk()),
  // o thunk retorna a funcao que sera executada
});
export default connect(null, mapDispatchToProps)(App);
