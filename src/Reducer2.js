import { useReducer } from "react";

const reducer = (state, action) => {
    if(action.type === "increase")
    return state + 10;
    else
    return state;
}

const Reducer2 = () => {

    const [width, dispatch] = useReducer(reducer, 100 );

    const Increase = () => dispatch({ type: "increase"});

    return(
        <div>
            <button style={{width}} onClick={Increase}>IncreaseMe</button>
        </div>
    )
}

export default Reducer2;
