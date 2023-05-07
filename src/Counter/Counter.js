import { useState } from "react"
import "./Counter.css"

export function Counter(){

    const[count, setCount] = useState(0);

    function increment (){
        if(count<10)
        setCount(count+1);
    }

    function decrement (){
        if(count>0)
        setCount(count-1);
    }
    // function printName(){
    //     console.log("Shyam")
    // }

    // const styles = {
    //     backgroundColor: "#faa361",
    //     color: "fff",
    //     borderRedius: "0.5rem",
    //     border: "3px solid #fff",
    //     padding: "10px 3px",
    // };
    return (
        <>
            <div className="wrepper">
                <h1>Counter With React.JS</h1>
                <div className="event">
                <button onClick={decrement}>Decrement</button>
                    <p>{count}</p>
                    <button onClick = {increment}>Increment</button>
                </div>
            </div>
        </>
    )
}