import { Route, Routes } from 'react-router-dom'
import Products from './pagesClient/Products'
import { Contact } from 'lucide-react'
import Home from './pagesClient/Home'

const HomePage = () => {
  return (
    <Routes>
      <Route path='/'>
        <Home />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
    </Routes>
  )
}

export default HomePage
