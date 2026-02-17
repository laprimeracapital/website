import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../app/layout";
import SectionSlug from "../app/section/slug";
import HomePage from "../app/page";
import NewsPage from "../app/slug";

export const routes = createBrowserRouter([
    {
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: '/:slug',
                element: <NewsPage/>
            },
            {
                path: '/section/:slug',
                element: <SectionSlug/>
            },
            {
                path: '/tag/:tag'
            }
        ]
    }
])