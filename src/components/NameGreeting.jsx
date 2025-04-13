import React, {useState} from "react";


const NameGreeting = () => {
    const [name, setName] = useState("Stranger");


    return (
        <div>
            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h2>Hello, {name}!</h2>
        </div>
    );
};

export default NameGreeting;