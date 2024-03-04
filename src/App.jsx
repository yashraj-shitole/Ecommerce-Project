import './App.css'
import ProductFilter from './Components/ProductFilter'
import ProductDetailsPage from './Components/ProductDetailsPage'
import ProductsPage from './Components/ProductsPage'

function App() {
 

  return (
      <div className='flex flex-col md:flex-row  h-[100vh] w-[100vw]'>
        {/* <div className='md:w-[20%]'>
          <ProductFilter  />
        </div> */}

        <div className='md:w-[100%]'>
          {/* <ProductDetailsPage/> */}
          <ProductsPage/>
        </div>
      </div>
  )
}

export default App
