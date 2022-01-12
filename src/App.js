import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercício React-Redux(Simples)</h1>
      <div className="linha">
        <Card title="Card 1" red>Good morning</Card>
        <Card title="Card 2" green>Hellow World</Card>

      </div>
      <div className="linha">
        <Card title="Card 3" blue>Welcome!</Card>
        <Card title="Card 4" purple>Hellow World</Card>

      </div>
    </div>  
  );
}

export default App;
