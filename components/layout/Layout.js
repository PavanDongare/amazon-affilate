import Footer from "./Footer"
import Header from "./Header"
import Card from "../ui/Card"

export const Layout = (props) => {
    return (
    <div>
        <Header></Header>
        <main>{props.children}</main>
    </div>

    )
}
