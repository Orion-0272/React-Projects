import "./Button.css";

function decrementValue(counter, setCounter) {
    const newCounterValue = counter - 1;
    setCounter(newCounterValue);
}

function DecrementButton({counter, setCounter}) {
    return (
        <>
            <button 
            className="Buttons"
            onClick={() => decrementValue(counter, setCounter)}
            >
                Decrement Value
            </button>
        </>
    );
}

export default DecrementButton;