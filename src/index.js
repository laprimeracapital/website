import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routers/index.routes";
import Provider from "./providers/index.provider";

import './assets/css/global.css'
import './assets/css/system.css'

createRoot(document.getElementById('root')).render(
    <>
        <Provider>
            <RouterProvider router={routes} />
        </Provider>
    </>
)