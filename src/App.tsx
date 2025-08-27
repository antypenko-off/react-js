
import './App.css'
import {Outlet} from "react-router";
import {HeaderComponent} from "./Components/HeaderComponent.tsx";

function App() {
    return (
        <div className="bg-blue-700 max-w-[1150px] mx-auto ">
            <HeaderComponent/>
            <main className="max-w-6xl mx-auto px-4 py-6">
                <Outlet />
            </main>
        </div>
    );
}


export default App
