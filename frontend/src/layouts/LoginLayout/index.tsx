import { Outlet } from "react-router-dom"

export const LoginLayout = () => {
    return(
        <>
        <div>HEADER</div>
        <main> <Outlet/> </main>
        <div>FOOTER</div>
        </>
    )
}