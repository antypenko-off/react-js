
import './App.css'
import {Link, Outlet} from "react-router";

function App() {

  return (
    <>
      <div>
         <Link to="/users">Users</Link>

      </div>
        <Link to="/posts">Posts</Link>
        <Link to="/complex">Posts</Link>
        <Outlet/>
    </>
  )
}

export default App
