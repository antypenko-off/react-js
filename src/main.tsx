import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router";
import {QueryClientProvider} from "@tanstack/react-query";
import {router} from "./routes/router.tsx";
import {queryClientConfig} from "./api/QueryClientConfigurator.ts";


createRoot(document.getElementById('root')!).render(
        <QueryClientProvider client={queryClientConfig}>
            <RouterProvider router={router} />
        </QueryClientProvider>
);