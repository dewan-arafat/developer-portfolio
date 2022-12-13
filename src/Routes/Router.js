import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layout/Main";
import Hero from "../Components/Pages/Hero/Hero";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,

        children: [
            {
                path: '/home',
                element: <Main></Main>
            },
            {
                path: '/about',
                element: <Hero></Hero>
            }

        ]
    }
])
export default router