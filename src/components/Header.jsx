import Link from "next/link";
import Navigation from "./Navigation";

const navItem = [
    {label: 'Home', href: '/'},
    {label: 'About', href: '/about'},
    {label: 'Contacts', href: '/contacts'},
    {label: 'Blog', href: '/blog'},
]

export default function Header() {

    return(
        <header>
            <h1>Header</h1>
            <Navigation navLinks={navItem}/>
            <nav>
                {/* <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contacts">Contacts</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                </ul> */}
            </nav>
            
        </header>
    )
}