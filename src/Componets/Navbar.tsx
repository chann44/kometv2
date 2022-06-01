import { NavLink } from "react-router-dom";
import Logo from "./Logo";
const links = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "About us",
        link: "/about"
    },
    {
        name: "Docs",
        link: "/docs"
    },
    {
        name: "Carrers",
        link: "/careers"
    }
];



const Navbar = () => {
    return (
        <>
            <nav className="bg-transparent px-2 py-4   sticky top-0 z-50 backdrop-blur-xl">
                <div className="flex justify-between items-center w-[50%] m-auto">
                    <div className="flex items-center">
                        <div className="w-24">
                            <Logo />
                        </div>
                        <ul className="mx-9">
                            {
                                links.map((link: any) => {
                                    return <>
                                        <NavLink className={({ isActive }) =>
                                            "mx-5 " + " text-lg " + "  counter" + (isActive ? "underline" : "")
                                        }
                                            to={link.link}

                                        >
                                            {link.name}
                                        </NavLink>
                                    </>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <button className="px-9 py-2 hero text-sm rounded-full ">join waitlist</button>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;