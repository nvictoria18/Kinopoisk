import { Outlet } from "react-router-dom";

const App = () => {
    return (<div
        className="bg-blue-100 underline"
    >
        Hello, world! YOU
        <Outlet></Outlet>
    </div>)
}

export default App;