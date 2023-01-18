import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import OurCause from "../Pages/ourcause";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <Main />,
        children:[
            {
                path:"/",
                element:<Home />
            },
            {
                path:"/ourcause",
                element: <OurCause />
            }
        ]
    }
])

export default routes