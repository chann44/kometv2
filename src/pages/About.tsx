import Footer from "../Componets/Footer/Index";
import JoinWaitlist from "../Componets/Join waitlist/index";
import Navbar from "../Componets/Navbar";


const Aboutus = () => {
    return (
        <><div className="text-opacity-90">
            <Navbar />
            <div className="w-[80%] m-auto ">
                <div className="flex flex-col items-center justify-center py-56 md:min-h-[90vh] ">
                    <h1 className="text-4xl md:text-7xl font-bold counter ">We are building </h1>
                    <h1 className="text-4xl md:text-7xl my-6 font-bold">you a home</h1>
                    <p className="text-xl md:text-3xl counter">in the world of crypto</p>
                </div>

                <div className="md:min-h-[90vh] flex justify-center items-center  my-12" >
                    <div className="flex-col  items-center px-4   md:p-24  flex max-w-[500px] bg-gray-900 text-center py-5 rounded-xl ">
                        <div className="w-[50%] rounded-full my-10">
                            <img className="object-cover rounded-full" src="https://pps.whatsapp.net/v/t61.24694-24/177259321_223651216311553_3724816846215524529_n.jpg?ccb=11-4&oh=039d7534dd21221659f54a6f1f86759b&oe=62A3EB86" alt="" />
                        </div>
                        <div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui laborum adipisci minus non enim doloribus reprehenderit, libero officia harum vero animi tempore et est, maxime eos assumenda illum ex at.</p>
                        </div>
                        <div className="mt-9">
                            <p className="text-opacity-30">- Co-FOunder</p>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen w-[80%] flex flex-col justify-center m-auto">
                    <h1 className="text-center text-4xl md:text-6xl font-bold counter">Backed by the best</h1>
                    <div className="flex py-24 flex-wrap justify-center">
                        <div className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] md:mx-7 mb-16">
                            <img className="object-cover rounded-full " src="https://pps.whatsapp.net/v/t61.24694-24/177259321_223651216311553_3724816846215524529_n.jpg?ccb=11-4&oh=039d7534dd21221659f54a6f1f86759b&oe=62A3EB86" alt="" />
                        </div>
                        <div className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] mx-4 md:mx-7 mb-16">
                            <img className="object-cover rounded-full " src="https://pps.whatsapp.net/v/t61.24694-24/177259321_223651216311553_3724816846215524529_n.jpg?ccb=11-4&oh=039d7534dd21221659f54a6f1f86759b&oe=62A3EB86" alt="" />
                        </div>
                        <div className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] md:mx-7 mb-16">
                            <img className="object-cover rounded-full " src="https://pps.whatsapp.net/v/t61.24694-24/177259321_223651216311553_3724816846215524529_n.jpg?ccb=11-4&oh=039d7534dd21221659f54a6f1f86759b&oe=62A3EB86" alt="" />
                        </div>
                        <div className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] mx-4 md:mx-7 mb-16">
                            <img className="object-cover rounded-full " src="https://pps.whatsapp.net/v/t61.24694-24/177259321_223651216311553_3724816846215524529_n.jpg?ccb=11-4&oh=039d7534dd21221659f54a6f1f86759b&oe=62A3EB86" alt="" />
                        </div>
                        <div className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] md:mx-7 mb-16">
                            <img className="object-cover rounded-full " src="https://pps.whatsapp.net/v/t61.24694-24/177259321_223651216311553_3724816846215524529_n.jpg?ccb=11-4&oh=039d7534dd21221659f54a6f1f86759b&oe=62A3EB86" alt="" />
                        </div>
                        <div className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] mx-4 md:mx-7 mb-16">
                            <img className="object-cover rounded-full " src="https://pps.whatsapp.net/v/t61.24694-24/177259321_223651216311553_3724816846215524529_n.jpg?ccb=11-4&oh=039d7534dd21221659f54a6f1f86759b&oe=62A3EB86" alt="" />
                        </div>
                        <div className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] md:mx-7 mb-16">
                            <img className="object-cover rounded-full " src="https://pps.whatsapp.net/v/t61.24694-24/177259321_223651216311553_3724816846215524529_n.jpg?ccb=11-4&oh=039d7534dd21221659f54a6f1f86759b&oe=62A3EB86" alt="" />
                        </div>
                        <div className="w-[70px] h-[70px] md:w-[150px] md:h-[150px] mx-4 md:mx-7 mb-16">
                            <img className="object-cover rounded-full " src="https://pps.whatsapp.net/v/t61.24694-24/177259321_223651216311553_3724816846215524529_n.jpg?ccb=11-4&oh=039d7534dd21221659f54a6f1f86759b&oe=62A3EB86" alt="" />
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