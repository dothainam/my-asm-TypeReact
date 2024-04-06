import { loginForm } from '@/services/auth'
import { LoginForm } from '@/types/Auth'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginForm>()
  const [submit, setSubmit] = useState<boolean>(false)
  const onSubmit = (formValue: LoginForm) => {
    setSubmit(true)
    loginForm(formValue)
      .then((res) => {
        setSubmit(false)
        const accessToken = res.accessToken
        window.sessionStorage.setItem('access-token', accessToken)
        alert('Dang nhap thanh cong')
        navigate('/admin/products')
      })
      .catch((e) => {
        setSubmit(false)
        console.log(e)
      })
  }
  return (
    <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
          Login to your account
        </h2>
      </div>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
              Email address
            </label>
            <div className='mt-2'>
              <input
                {...register('email', {
                  required: 'Vui long nhap email',
                  pattern: {
                    value: new RegExp(/^\S+@\S+$/i),
                    message: 'Email not valid'!
                  }
                })}
                type='email'
                autoComplete='email'
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
              {errors?.email && <div className='text-red-600'>{errors?.email?.message}</div>}
            </div>
          </div>
          <div>
            <div className='flex items-center justify-between'>
              <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                Password
              </label>
              <div className='text-sm'>
                <Link to='/signup' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                  Resgister
                </Link>
              </div>
            </div>
            <div className='mt-2'>
              <input
                {...register('password', {
                  required: 'Vui long nhap password',
                  minLength: {
                    value: 6,
                    message: 'Vui long nhap hon 6 ki tu'
                  }
                })}
                type='password'
                autoComplete='current-password'
                required
                className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              />
              {errors?.password && <div className='text-red-600'>{errors?.password?.message}</div>}
            </div>
          </div>
          <div>
            <button
              disabled={submit}
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              {submit ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
