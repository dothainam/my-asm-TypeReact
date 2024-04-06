import { signUpForm } from '@/services/auth'
import { SignUpForm } from '@/types/Auth'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<SignUpForm>()
  const [submit, setSubmit] = useState<boolean>(false)

  const onSubmit = (formValue: SignUpForm) => {
    setSubmit(true)
    signUpForm(formValue)
      .then((res) => {
        setSubmit(false)
        const accessToken = res.accessToken
        window.sessionStorage.setItem('access-token', accessToken)
        console.log('done')
        alert('Dang ki thanh cong')
        navigate('/login')
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
          Sign up to your account
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
              {submit ? 'Submiting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage
