import { AiFillGithub, AiFillTwitterCircle } from "react-icons/ai";

const TeamCard = () => {
    return (
        <>

            <div className=" flex my-1 flex-col items-center p-8 space-y-4  lg:w-[33%] md:w-[50%] w-full bg-[#191919] rounded-xl">
                <div className="w-24 rounded-full border">
                    <img className="object-cover rounded-full" src="https://pps.whatsapp.net/v/t61.24694-24/177259321_223651216311553_3724816846215524529_n.jpg?ccb=11-4&oh=039d7534dd21221659f54a6f1f86759b&oe=62A3EB86" alt="" />
                </div>
                <div className="text-center space-y-4">
                    <div className="">
                        <h1>Kush Ratan Gupta</h1>
                        <p>CEO & Founder</p>
                    </div>
                    <p>Curious about tools, defi and tech dogs </p>

                </div>
                <div className="flex space-x-4 text-3xl">
                    <AiFillGithub />
                    <AiFillTwitterCircle />
                </div>
            </div>

        </>
    )
}


export default TeamCard;