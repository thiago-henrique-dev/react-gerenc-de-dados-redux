import './App.css';
import Card from './components/Card';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux(Simples)</h1>
      <div className="linha">
        <Intervalo red></Intervalo>

      </div>
      <div className="linha">
        <Card title="Card 2" green>Hellow World</Card>
        <Card title="Card 3" blue>Welcome!</Card>
        <Card title="Card 4" purple>Hellow World</Card>

      </div>
    </div>  
  );
}

export default App;
