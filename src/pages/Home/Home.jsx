import Bannar from "../../components/Bannar"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import Skills from "../../components/Skills"


const Home = () => {
  return (
    <div className="lg:w-11/12 mx-auto">
       <Navbar></Navbar>
       <Bannar></Bannar>
       <h1>Home Page</h1>
       <Skills></Skills>
       <Contact></Contact>
       <Footer></Footer>
    </div>
  )
}

export default Home
