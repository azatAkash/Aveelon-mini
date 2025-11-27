import { Outlet } from "react-router-dom";
import Header from "../Header";

export const LoginLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <div>FOOTER</div>
    </>
  );
};
