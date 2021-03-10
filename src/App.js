import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard class="card" firstName="Jane" lastName="Doe" age="20" hairColor="Brown" />
      <PersonCard class="card" firstName="John" lastName="Doe" age="22" hairColor="Black" />
      <PersonCard class="card" firstName="Jack" lastName="Frost" age="200" hairColor="Blonde" />
      <PersonCard class="card" firstName="John" lastName="Mcain" age="46" hairColor="Balding" />
    </div>
  );
}

export default App;
