import Link from "next/link";

const VerticalNav = () => {
    return (
        <nav className="w-10 md:w-14 lg:w-20 items-center pt-20 flex flex-col gap-y-20 relative z-10 text-white border-r-2 border-primary-lavender bg-base-dark">
            <Link href="" className="vertical-text hover:text-primary-lavender duration-300">HOME</Link>
            <Link href="" className="vertical-text hover:text-primary-lavender duration-300">ABOUT</Link>
            <Link href="" className="vertical-text hover:text-primary-lavender duration-300">PROJECTS</Link>
            <Link href="" className="vertical-text hover:text-primary-lavender duration-300">CONTACT</Link>
        </nav>
    )
}

export default VerticalNav;