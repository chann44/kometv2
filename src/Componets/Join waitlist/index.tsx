import { useEffect, useState } from "react";
import { UseFirebase } from "../../utils/useFirebase";
import { useAppContext } from "../../_context";
import { toast } from "react-hot-toast"
import { AiOutlineClose, AiOutlineQuestion } from "react-icons/ai"


const JoinWaitlist = () => {
    const { email, setEmail, showModal, setShowModal, d, dset } = useAppContext()
    const [newuser, setNewUser] = useState<any>(null)
    const [onSubmit, setSubmit] = useState(false)


    const emailRegex = /\S+@\S+\.\S+/;

    useEffect(() => {
        (async () => {
            if (onSubmit) {
                if (emailRegex.test(email)) {
                    UseFirebase(email);
                    setSubmit(false)
                    setShowModal(true)
                }
                else {
                    toast.error("enter valid email")
                    setSubmit(false)
                }
            }
        })();
    }, [onSubmit]);


    return (
        <>
            {d ? (
                <>
                    <div
                        className="justify-center items-center backdrop-blur-lg flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto ">
                            {/*content*/}
                            <div className=" rounded-lg shadow-lg relative px flex px-28 flex-col w-full bg-black border border-[#30D293] p outline-none focus:outline-none ">
                                {/*header*/}
                                <div className="flex   items-start  p-5  rounded-t">
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 counter  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => dset(false)}
                                    >
                                        <AiOutlineClose className="text-4xl" />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="flex flex-col my-12 lg:w-[600px] ">
                                    <div className="text-center mb-24">
                                        <h1 className="counter text-5xl font-bold">Reserve your spot</h1>
                                        <p className="text-5xl font-bold mt-9">Get Early Acess</p>
                                    </div>

                                    <form
                                        className="w-full flex items-center"
                                        onSubmit={async (e) => {
                                            e.preventDefault();
                                            setSubmit(true)
                                            console.log(onSubmit)
                                            console.log("true")
                                        }}
                                    >
                                        <input value={email} onChange={
                                            (e) => {
                                                setEmail(e.target.value)
                                            }
                                        } type="text" placeholder="Enter your email " className="bg-transparent rounded-full border border-[#30D293] border-gray-700 py-3 px-4 w-full" />
                                        <input type="submit" value="join waitlist" className="mx-2 px-9 py-4 bg-slate-900 text-sm hero rounded-full " />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}





        </>
    )
}

export default JoinWaitlist;