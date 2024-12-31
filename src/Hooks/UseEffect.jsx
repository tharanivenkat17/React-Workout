import { useState, useEffect } from "react";

function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`;// ${} evaluated and inserted as a string
    }, [count]);

    return (
        <div>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Click {count} times
            </button>
        </div>
    );
}
export default UseEffect;