
import './App.css'
import {Outlet} from "react-router";
import {Header} from "./Components/HeaderComponent.tsx";



function App() {
    return (
        <div>
            <Header />
            <Outlet/>
        </div>
    );
}


export default App
