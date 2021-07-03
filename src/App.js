import './App.css';
import { Router } from '@reach/router';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Cuatro from './components/Cuatro';
import Hello from './components/Hello';
import HelloBlueRed from './components/HelloBlueRed';

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Router>
        <Home path="/home"/>
        <Cuatro path="/4"/>
        <Hello path="hello"/>
        <HelloBlueRed path="hello/blue/red"/>
      </Router>
    </div>
  );
}
export default App;
