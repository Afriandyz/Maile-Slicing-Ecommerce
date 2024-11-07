import Header from '../components/Header_Search/Header'
import Carousel from '../components/Carousel/Carousel'
import Benefit from '../components/Benefit/Benefit'
import Categories from '../components/Categories/Categories'
import Summer from '../components/Summer/Summer'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Benefit />
      <Categories />
      <Summer />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage