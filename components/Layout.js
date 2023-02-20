import { Children } from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = () => {
    return (
        <>
            <Navbar/>
            {Children.map(child => <div>{child}</div>)}
            <Footer/>
        </>
    )
}

export default Layout