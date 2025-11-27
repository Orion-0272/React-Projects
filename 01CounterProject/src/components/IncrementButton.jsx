import "./Button.css";

function incrementValue(counter, setCounter) {
    const newCounterValue = counter + 1;
    setCounter(newCounterValue);
}

function IncrementButton({counter, setCounter}) {
    return (
        <>
            <button 
            className="Buttons"
            onClick={() => incrementValue(counter, setCounter)}
            >
                Increment Value
            </button>
        </>
    );
}

export default IncrementButton;