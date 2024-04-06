import { createProduct } from '@/services/product'
import { ProductFormValue } from '@/types/Product'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const ProductAddForm = () => {
  const [add, setAdd] = useState<boolean>(false)
  const { register, handleSubmit, formState } = useForm<ProductFormValue>()
  const navigate = useNavigate()

  const errors = formState.errors

  const onSubmit = (formValue: ProductFormValue) => {
    setAdd(true)
    createProduct(formValue)
      .then((res) => {
        setAdd(false)
        alert('Them thanh cong')
        navigate('/admin/products')
        console.log(res)
      })
      .catch((e) => {
        setAdd(false)
        console.log(e)
      })
  }
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='py-8 px-4 mx-auto max-w-2xl lg:py-16'>
        <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white'>Add a product</h2>
        <form action='#' onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
            <div className='sm:col-span-2'>
              <label htmlFor='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Product Name
              </label>
              <input
                {...register('name', {
                  required: 'Ten khong dc de trong',
                  minLength: {
                    value: 5,
                    message: 'Ki tu phai lon hon 5'
                  },
                  maxLength: {
                    value: 20,
                    message: 'Ki tu phai nho hon 20'
                  }
                })}
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Type product name'
              />
              {errors?.name && <div className='text-red-600'>{errors?.name?.message}</div>}
            </div>
            <div className='w-full'>
              <label htmlFor='image' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                image
              </label>
              <input
                {...register('image', {
                  required: 'Anh khong dc de trong'
                })}
                type='text'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Product image'
              />
              {errors?.image && <div className='text-red-600'>{errors?.image?.message}</div>}
            </div>
            <div className='w-full'>
              <label htmlFor='price' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Price
              </label>
              <input
                {...register('price', {
                  required: 'Phai nhap price',
                  min: {
                    value: 0,
                    message: 'Phai lon hon 0'
                  }
                })}
                type='number'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='$2999'
              />
              {errors?.price && <div className='text-red-600'>{errors?.price?.message}</div>}
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='description' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Description
              </label>
              <textarea
                {...register('description', {
                  required: 'Ten khong dc de trong',
                  minLength: {
                    value: 5,
                    message: 'Ki tu phai lon hon 5'
                  },
                  maxLength: {
                    value: 20,
                    message: 'Ki tu phai nho hon 20'
                  }
                })}
                id='description'
                rows={8}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
                placeholder='Your description here'
                defaultValue={''}
              />
              {errors?.description && <div className='text-red-600'>{errors?.description?.message}</div>}
            </div>
          </div>
          <button
            disabled={add}
            onClick={() => {}}
            type='submit'
            className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800'
          >
            {add ? 'Adding...' : 'Add'}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ProductAddForm
