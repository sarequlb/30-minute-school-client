import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
           {
            path:'/courses',
            loader:() => fetch('https://30-minute-school-server.vercel.app/courses'),
            element:<Courses></Courses>
           }

        ]
    }
])