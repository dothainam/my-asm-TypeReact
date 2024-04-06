import { updateProduct } from '@/services/product'
import { Product, ProductFormValue } from '@/types/Product'
import { error } from 'console'
import { FC, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Props = {
  product: Product
}

const ProductForm: FC<Props> = ({ product }) => {
  const navigate = useNavigate()
  const [formValue, setFormValue] = useState<ProductFormValue>({
    name: product.name,
    description: product.description,
    price: String(product.price),
    image: product.image
  })

  const [saving, setSaving] = useState<boolean>(false)

  const handleFormChange = (newValue: Record<string, string>) => {
    setFormValue({
      ...formValue,
      ...newValue
    })
  }
  const handleSave = () => {
    // khi người nhấn submit

    if (!formValue.name) {
      alert('Khong duoc de trong name')
      return
    }

    setSaving(true)
    updateProduct(product.id, formValue)
      .then(function () {
        setSaving(false)
        navigate('/admin/products')
      })
      .catch((e: unknown) => {
        setSaving(false)
        console.log(e)
      })
  }

  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
        <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>Edit a product</h2>
        <form>
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <div className='sm:col-span-2'>
              <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Product Name
              </label>
              <input
                value={formValue.name}
                onChange={(e) => {
                  handleFormChange({
                    name: e.target.value
                  })
                }}
                type='text'
                name='name'
                id='name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Type product name'
                required
              />
            </div>
            <div className='w-full'>
              <label htmlFor='image' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                image
              </label>
              <input
                value={formValue.image}
                onChange={(e) => {
                  handleFormChange({
                    image: e.target.value
                  })
                }}
                type='text'
                name='image'
                id='image'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Product image'
                required
              />
            </div>
            <div className='w-full'>
              <label htmlFor='price' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Price
              </label>
              <input
                value={formValue.price}
                onChange={(e) => {
                  handleFormChange({
                    price: e.target.value
                  })
                }}
                type='number'
                name='price'
                id='price'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='$2999'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Description
              </label>
              <textarea
                value={formValue.description}
                onChange={(e) => {
                  handleFormChange({
                    description: e.target.value
                  })
                }}
                id='description'
                rows={8}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Your description here'
              />
            </div>
          </div>
          <button
            disabled={saving}
            onClick={() => {
              handleSave()
            }}
            type='submit'
            className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
          >
            {saving ? 'Editing...' : 'Edit product'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ProductForm
