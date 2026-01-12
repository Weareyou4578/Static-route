import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {

  return (
     
<BrowserRouter>
  <Navbar />
<Routes >
  <Route path="/" element={<Home/>} />
  <Route path="/product" element={<Product/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact/>} />
</Routes>
  <Footer/>

</BrowserRouter>

  )
}

export default App
