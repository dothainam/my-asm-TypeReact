import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ProductListPage from './pages/admin/ProductListPage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import EditProduct from './pages/admin/ProductEdit'
import ProductAdd from './pages/admin/ProductAdd'
import SignUpPage from './pages/SignUpPage'
import LoginPage from './pages/LoginPage'
import ProtectRouter from './protectRouter'
import Home from './pages/client/pagesClient/Home'
import Products from './pages/client/pagesClient/Products'
import Detail from './pages/client/pagesClient/Detail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products/:id',
    element: <Detail />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/admin/products/create',
    element: <ProductAdd />
  },
  {
    path: '/admin/products/:id',
    element: <EditProduct />
  },
  {
    path: '/admin/products',
    element: (
      <ProtectRouter>
        <ProductListPage />
      </ProtectRouter>
    )
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
