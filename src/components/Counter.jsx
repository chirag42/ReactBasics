import React, {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (<div>
        <p>Count :  {count} </p>
        <button onClick={() => setCount(count + 1)}>Click Me!
        </button>
    </div>);


}
export default Counter;