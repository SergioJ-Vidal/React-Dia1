import Person from "./components/Person/Person"
import './App.css';

function App() {
  return (
    <div className="App">
      <Person name="Sergio" surname="Juan Vidal" age= {35}/>
      <Person name="María" surname="López García" age= {24}/>
      <Person name="Pedro" surname="Pérez Reverte" age= {55}/>
    </div>
  );
}

export default App;
