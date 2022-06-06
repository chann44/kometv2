import WhyKOmetCard from "./whycard";

const WhyKomet = () => {
    return (
        <>
            <div>
                <div className="lg:w-[80%] m-auto  flex items-start mb-44 ">
                    <div className="sticky top-80 mx-12 w-[40%] hidden lg:block ">
                        <img className="object-cover" src="/img.png" alt="" />
                    </div>
                    <div className="w-full lg:w-[60%] p-6">
                        <WhyKOmetCard title="They grow so fast" text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you." />
                        <WhyKOmetCard title="They grow so fast" text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you." />
                        <WhyKOmetCard title="They grow so fast" text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you." />
                        <WhyKOmetCard title="They grow so fast" text="Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you." />
                        <div className="h-[35vh]  flex bg-black flex-col justify-start md:px-11 ">
                            <h1 className="text-5xl font-bold counter">They grow so fast</h1>
                            <p className="text-xl py-7">Your USDTs and USDCs feel so at home here, that they will grow by 10% by the end of the year. Allow your stable coins to generate stable returns for you."</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default WhyKomet;