import Bannar from "../../components/Bannar"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"


const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
       <Navbar></Navbar>
       <Bannar></Bannar>
       <h1>Home Page</h1>
       <Footer></Footer>
    </div>
  )
}

export default Home
