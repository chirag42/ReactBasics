import React, {useState} from "react";

function Calculator() {

    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [operation, setOperation] = useState("+");
    const [answer, setAnswer] = useState(0);

    return <div>
        <span>Input 1: </span>
        <input
            type="number"
            placeholder="Enter input 1"
            value={input1}
            onChange={(e) => setInput1(Number(e.target.value))}
        />
        <br></br>
        <span>Input 2: </span>
        <input
            type="number"
            placeholder="Enter input 2"
            value={input2}
            onChange={(e) => setInput2(Number(e.target.value))}
        />
        <br></br>
        <span>Operation: </span>
        <input
            type="text"
            placeholder="Enter operation"
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
        />
        <br></br>
        <p>Answer : {answer}</p>
        <button onClick={() => {
            switch (operation){
                case "+": setAnswer(input1 + input2); break;
                case "-": setAnswer(input1 - input2); break;
                case "*": setAnswer(input1 * input2); break;
                case "/": setAnswer(input1 / input2); break;
                default: setAnswer(NaN);
            }
        }}>Calculate</button>
    </div>
}

export default Calculator;