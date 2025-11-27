import { useState } from "react";
import IncrementButton from "./components/IncrementButton";
import DecrementButton from "./components/DecrementButton";
import "./App.css"

function App() {
    const [counter, setCounter] = useState(0);

    return (
        <div className="main-container">
            <div className="headings">
                <h1 className="main-heading">A React Project</h1>
                <h2 className="sub-heading">Counter Application</h2>
            </div>

            <div className="counter-label">Counter Value: {counter}</div>

            <div className="button-container">
                <IncrementButton counter={counter} setCounter={setCounter} />
                <DecrementButton counter={counter} setCounter={setCounter} />
            </div>
        </div>
    );
}

export default App;