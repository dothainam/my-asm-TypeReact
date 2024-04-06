import { Link } from 'react-router-dom'
import Footer from './Footer'
import HomeProducts from './HomeProducts'

const Home = () => {
  return (
    <div>
      <nav className='bg-gray-800'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
              <button
                type='button'
                className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                aria-controls='mobile-menu'
                aria-expanded='false'
              >
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open main menu</span>
              </button>
            </div>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex space-x-4'>
                  <Link
                    to='/'
                    className=' text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    Home
                  </Link>
                  <Link
                    to='/products'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    Products
                  </Link>
                  <a
                    href='#'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    Contact
                  </a>
                  <Link
                    to='/signup'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    Sign up
                  </Link>
                  <Link
                    to='/login/admin'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    Login
                  </Link>
                  <Link
                    to='/admin'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    Log to admin
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <h1 className='py-4 text-black text-center text-4xl font-bold'>New products</h1>

      <HomeProducts />
      <Footer />
    </div>
  )
}

export default Home
