// type ButtonProps = {    
    // handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void // props pass from parent
// }
export const Button = () => {  //props pass use props: ButtonProps
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>,id: number) => { 
        console.log('Button clicked', event)
    }
    return (
        <div>
            <button onClick={(event) =>handleClick(event, 1)}>Click me!</button>
        </div>
    )
}
