import {useState} from "react";

export const useCounter = ( initialState = 1, max = 10, gift = true) => {
    const [counter, setCounter] = useState(initialState);
    const reset = () => {
        setCounter( initialState );
    }
    const increment = () => {
        (gift && counter <= max-1) && setCounter( counter + 1 );
    }
    const decrement = () => {
        counter >= 2 && setCounter( counter - 1 );
    }
    return {
        counter,
        increment,
        decrement,
        reset
    };

}
