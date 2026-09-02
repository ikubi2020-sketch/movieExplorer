import { Outlet } from "react-router"
import Header from "./Header"

export default function LayOut() {
  return (
    <><div className="container">
        <Header />
        <Outlet/>
    </div>
    </>
  )
}
