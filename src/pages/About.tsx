
import TeamCard from "../Componets/Aboutus/TeamCard";
import Footer from "../Componets/Footer/Index";
import JoinWaitlist from "../Componets/Join waitlist/index";
import Navbar from "../Componets/Navbar";


const Aboutus = () => {
    return (
        <><div className="text-opacity-90">
            <Navbar />
            <div className="w-[80%] m-auto ">
                <div className="flex flex-col items-center justify-center min-h-[50vh] md:min-h-[90vh] ">
                    <h1 className="text-4xl md:text-7xl font-bold counter ">We are building </h1>
                    <h1 className="text-4xl md:text-7xl my-6 font-bold">you a home</h1>
                    <p className="text-xl md:text-3xl counter">in the world of crypto</p>
                </div>
                <h1 className="text-4xl lg:text-5xl text-center font-bold">Our <span className="counter">Team</span></h1>
                <p className="text-center text-lg py-4">We have small but growing remote first team</p>
                <div className="min-h-screen my-8 w-full  lg:w-[80%] flex content-start justify-center flex-wrap text-white  mx-auto">
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                    <TeamCard />
                </div>

                <div className="min-h-screen w-[80%] flex flex-col justify-center m-auto">
                    <h1 className="text-center text-4xl md:text-6xl font-bold counter">Backed by the best</h1>
                    <div className="flex py-24 flex-wrap justify-center">
                        <div className="md:w-[33%] border w-[50%]">
                            <img className="object-cover  " src="https://www.remnote.com/assets/data/investor-images/general-catalyst.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <JoinWaitlist />
        </div>

        </>

    )
}

export default Aboutus;