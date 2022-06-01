import { db } from "../firebase";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";
import { RWebShare } from "react-web-share";
import { useAppContext } from "../_context";



export const Rank = () => {
    const [rank, setRank] = useState(0);
    const [reflink, setrefLink] = useState("");
    let newuser: any = null;
    let myurl: any = null;
    const { email } = useAppContext()
    const { showModal, setShowModal, onSubmit } = useAppContext()

    useEffect(() => {
        (async () => {
            console.log(email)
            const sortedArray: any = [];
            const sortedUser = collection(db, "users");
            const q = query(
                sortedUser,
                orderBy("points", "desc"),
                orderBy("created_at", "asc")
            );

            const sortedUsers = (await getDocs(q)).docs;
            sortedUsers.forEach((doc) => {
                sortedArray.push({ ...doc.data(), id: doc.id });
            });
            // console.log(sortedArray)
            const userQuery = query(sortedUser, where("email", "==", email));
            newuser = (await getDocs(userQuery)).docs[0].data();

            myurl = `${window.location.protocol}//${window.location.host}/?refID=${newuser ? newuser.refID : ""
                }`;
            setrefLink(myurl);

            if (newuser) {
                sortedArray.forEach((item: any) => {
                    if (newuser.refID === item.refID) {
                        // console.log("found it damn ")
                        setRank(sortedArray.indexOf(item) + 1500);
                    }
                });
            } else {
                console.log(" user not found ")
            }
        })();
    }, [email]);


    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center backdrop-blur-2xl flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-full  my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 p-12 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
                                {/*header*/}

                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className=" text-white overflow-hidden relative  flex justify-center flex-col items-center">
                                        <img
                                            src=" https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/ast.svg?alt=media&token=90091eca-e96f-432b-a32a-add5e6f542e3"
                                            className="w-44 h-44 lg:w-48"
                                            alt="Komet join thanks"
                                        />
                                        <h2 className="flex text-lg leading-6 py-4 lg:text-2xl">
                                            That's Cool{" "}
                                            <img
                                                src="https://firebasestorage.googleapis.com/v0/b/kometrefral.appspot.com/o/future.svg?alt=media&token=e76969bc-bb28-4085-abad-6fa4eefc65b9"
                                                className=" mx-2 w-6"
                                                alt="Komet Rocket"
                                            />
                                        </h2>
                                        <p className="rankjoin font-bold text-xl">
                                            Thanks for joining the waitlist!
                                        </p>
                                        <p className="p-5"> Your Current Postion</p>
                                        <div className="border border-[#8146FF] w-[90%] text-center text-xl p-2 max-w-md">
                                            # {rank ? rank : "loading....."}
                                        </div>

                                        <p className="text-sm my-6 text-center px-8">
                                            The first 1000 frens can get an exclusive NFT airdrop of worth $100 🎉
                                        </p>
                                        <div className="flex justify-between  w-[90%] text-sm max-w-md ">
                                            <RWebShare
                                                data={{
                                                    title: myurl,
                                                    url: reflink,
                                                    text: myurl,
                                                }}
                                            >
                                                <button className="w-full intro-gradient rounded-lg p-2 text-xl  ">
                                                    Invite Friends
                                                </button>
                                            </RWebShare>
                                        </div>
                                    </div>

                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );


};