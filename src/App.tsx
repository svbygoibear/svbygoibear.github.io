import { useState } from "react";
import { LoadingAnimation } from "./components/LoadingAnimation/LoadingAnimation";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <LoadingAnimation />
        </>
    );
}

export default App;
