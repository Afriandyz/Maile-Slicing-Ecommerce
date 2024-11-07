import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <div className="font-Poppins md:hidden">
      <Navbar />
      <HomePage />
    </div>
  )
}

export default App