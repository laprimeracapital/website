import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../app/layout";
import SectionSlug from "../app/section/slug";
import HomePage from "../app/page";
import NewsPage from "../app/slug";
import AdminLayout from "../app/admin/layout";
import HomeAdmin from "../app/admin/page";
import EditorPage from "../app/admin/editor";

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
    },
    {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
            {
                index: true,
                element: <HomeAdmin/>
            },
            {
                path: '/admin/editor',
                element: <EditorPage/>
            }
        ]
    }
])