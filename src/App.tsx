import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  }

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Diana",
      last: "Prince",
    },
  ]
  return (
    <div className="App">
      {/* remove the messageCount and pass greet in optional or destructrting */}
      <Greet name="to All" messageCount={10} isLoggedIn={false} />   
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Placeholder</Heading>
      {/* parent to children props pass */}
      <Oscar>
        <Heading>
          oscar
        </Heading>
      </Oscar>

    </div>
  );
}

export default App;
