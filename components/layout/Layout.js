import Footer from "./Footer"
import Header from "./Header"
import Card from "../ui/Card"

export const Layout = (props) => {
    return (
        <div>
            <div class="flex flex-col h-screen justify-between">
                <header class="h-10"> <Header></Header></header>
                <main class="mb-auto h-10 bg-green-500">{props.children}</main>
                <footer class="h-10"><Footer></Footer></footer>
            </div>     
        </div>
    )
}
