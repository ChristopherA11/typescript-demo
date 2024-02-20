// string and number use in type

type GreetProps = {
  name: string;
  messageCount: number; // use the messageCount ? to make it optional
  isLoggedIn: boolean;
};


export const Greet = (props: GreetProps) => {
 // const {messageCount} = props; // use destructuring to get the messageCount return not pass in props
  return (
    <div>
      {props.isLoggedIn ? <h3>welcome {props.name} { props.messageCount} {props.isLoggedIn} </h3> : <h3>welcome Guest</h3>}
    </div>
  )
}



