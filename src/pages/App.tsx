import { useState } from "react";
import Features from "../Componets/Features/Index";
import Footer from "../Componets/Footer/Index";
import Hero from "../Componets/Hero";
import Navbar from "../Componets/Navbar";
import { Rank } from "../Componets/Rank";
import WhyKomet from "../Componets/WhyKomet/Index";
import { AppContext } from "../_context";
import toast, { Toaster } from 'react-hot-toast'
import Aboutus from "./About";
import Careers from "./Careers";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const App = () => {
  return (
    <>
      <div className="">
        <Navbar />
        <Hero />
        <WhyKomet />
        <Features />
        <Footer />
        <Rank />
      </div>

    </>
  )
}


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


        <div className='w-full bg-black text-white min-h-screen '>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<App />} />
              <Route path='about' element={<Aboutus />} />
              <Route path='docs' element={<Aboutus />} />
              <Route path='careers' element={<Careers />} />
            </Routes>
          </BrowserRouter>
        </div>
      </AppContext.Provider>

    </>
  )
}

export default Home;