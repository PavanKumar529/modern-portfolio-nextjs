import Link from "next/Link";

const NavLink = ({ href, title }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 text-white"
        >
        {title}
        </Link>
    )
}

export default NavLink