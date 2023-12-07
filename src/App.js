import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './pages/Home/Home';
import Jobs from "./pages/Jobs/Jobs";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/jobs",
        element: <Jobs />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />

        </>);
}
export default App;