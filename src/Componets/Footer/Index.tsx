import { AiFillTwitterSquare, AiFillLinkedin, } from "react-icons/ai"
import { BsDiscord } from "react-icons/bs"
import Logo from "../Logo";


const Footer = () => {
    return (
        <>
            <footer className=" p-12 w-[80%] m-auto flex justify-between">
                <div className="flex items-center">
                    <div className="w-24 mr-9">
                        <Logo />
                    </div>
                    <p>Copyright © 2022 - Komet Technology Inc - All Rights Reserved</p>
                </div>
                <div className="flex ">
                    <a href=""><AiFillLinkedin className="text-3xl text-white mx-3" /></a>
                    <a href=""><AiFillTwitterSquare className="text-3xl text-white mx-3" /></a>
                    <a href=""><BsDiscord className="text-3xl text-white mx-3" /></a>
                </div>
            </footer>
        </>
    )
}

export default Footer;