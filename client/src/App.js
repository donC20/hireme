import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home/Home';
import Jobs from "./pages/Jobs/Jobs";
import PostJob from "./pages/PostJob/PostJob";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
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
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />

        </>);
}
export default App;