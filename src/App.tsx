import { useState } from "react";
import { LoadingAnimation } from "./components/LoadingAnimation/LoadingAnimation";

export const App: React.FunctionComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <LoadingAnimation />
        </>
    );
};
