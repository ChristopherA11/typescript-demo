import { useReducer } from "react"

type stateType = {
    count: number
}

type updateType = {
     type: "increment" | "decrement"
     payload: number
}

type resetActionType = {
    type: "reset"
}

type actionType = updateType | resetActionType

const initialState = {count: 0}

const reducer =(state:stateType, action: actionType) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case "reset":
            return initialState    
        default:
            return state;
    }
}
export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({type: "decrement", payload: 5})}>Decrement</button>
            <button onClick={() => dispatch({type: "increment", payload: 5})}>Increment</button>
            <button onClick={() => dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}