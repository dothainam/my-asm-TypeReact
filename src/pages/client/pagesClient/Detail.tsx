import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProduct } from '@/services/product'
import Footer from './Footer'

const Detail = () => {
  const { id } = useParams()

  const result = useQuery({
    queryKey: ['product'],
    queryFn: () => (id ? getProduct(id) : undefined)
  })

  const product = result.data
  return (
    <div className=''>
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
                    to='/login'
                    className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className='text-gray-700 body-font overflow-hidden bg-white'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img
              alt='ecommerce'
              className='lg:w-1/2 w-full object-cover object-center rounded border border-gray-200'
              src={product?.image}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>BRAND NAME</h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1 mt-5'>{product?.name}</h1>

              <p className='leading-relaxed mt-5'>{product?.description}</p>

              <div className='flex mt-5'>
                <span className='title-font font-medium text-2xl text-gray-900'>${product?.price}</span>
                <button className='flex ml-auto text-white bg-gray-800 border-0 py-2 px-6  hover:bg-gray-600 rounded'>
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Detail
