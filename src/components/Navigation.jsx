'use client'

const { default: Link } = require("next/link")
const { usePathname } = require("next/navigation")

const Navigation = ({navLinks}) => {

    const pathname = usePathname()
    return <>
    <nav>
        <ul>
        {navLinks.map((link) => {
        const isActive = pathname === link.href

            return (
                <li key={link.label} className={isActive ? 'active' : ''}>
                    <Link 
                    key={link.label}
                    href={link.href}
                    >
                        {link.label}
                    </Link>
                </li>
            )
        })}
        </ul>
    </nav>
    

    </>
}

export default Navigation