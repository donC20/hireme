import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home/Home';
import Jobs from "./pages/Jobs/Jobs";
import PostJob from "./pages/PostJob/PostJob";
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
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />

        </>);
}
export default App;