import { MainLayout } from "@/layouts/MainLayout";
import { PasswordReset } from "@/pages/PasswordReset";
import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
    {
        path: '/',
        element:<MainLayout/>,
        children: [
            {
                path:'password-reset',
                element:<PasswordReset/>
            }
        ]
    }
]