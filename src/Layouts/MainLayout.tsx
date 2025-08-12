import {Link, Outlet} from "react-router";


const MainLayout = () => {
    return <>
        <div>Users-Posts Info</div>
        <div><Link to={"users"}>UserInfo</Link></div>
        <div><Link to={"posts"}>PostsInfo</Link></div>
        <><Outlet/></>

    </>
};


export default MainLayout;