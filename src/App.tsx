import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Button } from './components/event/Button';
import { Input } from './components/event/Input';
import { User } from './components/state/User';

function App() {
  //person use in Person.tsx
  const personName = {
    first: "Bruce",
    last: "Wayne",
  }

  //personlist use in PersonList.tsx
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
      <Greet name="to All" messageCount={10} isLoggedIn={true} />   
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
      <Button handleClick={(event, id)=> {console.log("buttonClicked",event, id)}} />
      <Input value="" handleChange={(event) => {console.log(event)}} />
      <User />
    </div>
  );
}

export default App;
