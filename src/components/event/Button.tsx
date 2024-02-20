type ButtonProps = {    
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
export const Button = (props: ButtonProps) => {
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>,id: number) => { 
//         console.log('Button clicked', event)
//     }
    return (
        <div>
            <button onClick={(event) =>props.handleClick(event, 1)}>Click me!</button>
        </div>
    )
}
