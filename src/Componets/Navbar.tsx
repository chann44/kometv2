import { NavLink } from "react-router-dom";
import { useAppContext } from "../_context";
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

];



const Navbar = () => {
    const { d, dset } = useAppContext()
    return (
        <>
            <nav className="bg-transparent px-5 py-4   sticky top-0 z-50 backdrop-blur-xl">
                <div className="flex justify-between items-center lg:w-[60%] m-auto">
                    <div className="flex items-center">
                        <div className="w-24">
                            <Logo />
                        </div>
                        <ul className=" mx-9 hidden md:flex font-bold">
                            {
                                links.map((link: any) => {
                                    return <>
                                        <NavLink className={({ isActive }) =>
                                            "mx-3 " + " text-sm " + "  counter" + (isActive ? "underline" : "")
                                        }
                                            to={link.link}

                                        >
                                            {link.name}
                                        </NavLink>
                                    </>
                                })

                            }
                            <a href="https://kometverse.notion.site/Kometverse-Team-af006bc7947944aab126907c9af392bd" className="mx-3 text-sm counter">Careers</a>
                        </ul>
                    </div>
                    <div>
                        <button className="px-9 py-2 hero text-sm rounded-full " onClick={() => {
                            dset(true)
                        }}>join waitlist</button>
                    </div>
                </div>
            </nav>
            <ul className=" md:hidden flex justify-center sticky top-0 font-bold ">
                {
                    links.map((link: any) => {
                        return <>
                            <NavLink className={({ isActive }) =>
                                "mx-2 " + " text-lg " + "  counter" + (isActive ? "underline" : "")
                            }
                                to={link.link}

                            >
                                {link.name}
                            </NavLink>
                        </>
                    })
                }
                <a href="https://kometverse.notion.site/Kometverse-Team-af006bc7947944aab126907c9af392bd" className="mx-3 text-lg counter">Careers</a>

            </ul>

        </>
    )
}

export default Navbar;