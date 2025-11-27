import { LoginLayout } from "@/layouts/LoginLayout";
import { MainLayout } from "@/layouts/MainLayout";
import { AccountRecovery } from "@/pages/AccountRecovery";
import { LoginPage } from "@/pages/LoginPage";
import { PasswordReset } from "@/pages/PasswordReset";
import { SignUpPage } from "@/pages/SignUpPage";
import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "password-reset",
        element: <PasswordReset />,
      },
      {
        path: "account-recovery",
        element: <AccountRecovery/>
      }
    ],
  },
  {
    element: <LoginLayout />,
    children: [{ path: "login", element: <LoginPage /> }, { path: 'sign-up', element: <SignUpPage />}],
  },
];
