import { useState } from "react";
import Features from "../Componets/Features/Index";
import Footer from "../Componets/Footer/Index";
import Hero from "../Componets/Hero";
import Navbar from "../Componets/Navbar";
import { Rank } from "../Componets/Rank";
import WhyKomet from "../Componets/WhyKomet/Index";
import { AppContext } from "../_context";
import toast, { Toaster } from 'react-hot-toast'

const Home = () => {

  const [email, setEmail] = useState("")
  const [showModal, setShowModal] = useState(false);
  const [d, dset] = useState(false)
  const shared_state = {
    email,
    setEmail,
    showModal,
    setShowModal,
    d, dset
  }

  return (
    <>
      <AppContext.Provider value={shared_state} >
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
            // Default options for specific types
            success: {
              duration: 3000,
              theme: {
                primary: 'green',
                secondary: 'black',
              },
            },
          }}
        />


        <div className="">
          <Navbar />
          <Hero />
          <WhyKomet />
          <Features />
          <Footer />
          <Rank />
        </div>
      </AppContext.Provider>

    </>
  )
}

export default Home;