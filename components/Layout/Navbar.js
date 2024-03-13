import Link from "next/link"
import Logo from "./Logo"




const Navbar = () => {
    return (
        <header className="flex justify-between items-center py-3 container mx-auto">
            <Link href='/'>
                    <Logo />
            </Link>
            <nav>
                <ul className="flex justify-between items-center gap-3">
                    <li><Link href='/posts' >Posts</Link></li>
                    <li><Link href='/contact'>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar