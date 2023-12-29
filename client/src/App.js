import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { useState, useEffect, React } from 'react'
import Home from './pages/Home/Home';
import Jobs from "./pages/Jobs/Jobs";
import PostJob from "./pages/PostJob/PostJob";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import FullBodyLoading from "./components/FullBodyLoading";
import Profile from "./pages/Profile/Profile";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/jobs",
        element: <Jobs />,
    },
    {
        path: "/postjob",
        element: <PostJob />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);

function App() {
    const [visibilityState, setVisibilityState] = useState('grid');
    useEffect(() => {
        setVisibilityState('none')
    }, []);
    return (
        <>
            <FullBodyLoading visibility={visibilityState} />
            <RouterProvider router={router} />

        </>);
}
export default App;