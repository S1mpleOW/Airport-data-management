/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable jsx-a11y/label-has-associated-control */
import Input from '@components/input/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import * as React from 'react'
import { FieldValues } from 'react-hook-form/dist/types'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '@store/store'
import loginUser from '@store/user.action'
import { AnyAction } from '@reduxjs/toolkit'
import { Link, useNavigate } from 'react-router-dom'

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
})

const Login: React.FunctionComponent<{}> = (props) => {
  const { accessToken, isLoggedIn, error } = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    formState: { isSubmitting, isValid },
    handleSubmit,
    control,
    setError,
  } = useForm<FieldValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  React.useEffect(() => {
    if (isLoggedIn && accessToken !== undefined) {
      navigate('/ticket')
    }
  }, [accessToken, navigate, isLoggedIn])

  React.useEffect(() => {
    if (error !== undefined) {
      setError('password', {
        type: 'manual',
        message: error,
      })
    }
  }, [error, setError])

  const onSubmit = async (data: FieldValues): Promise<void> => {
    if (isSubmitting || !isValid) return
    dispatch(
      loginUser(
        data as {
          username: string
          password: string
        }
      ) as unknown as AnyAction
    )
  }
  return (
    <main>
      <section className="absolute w-full h-full">
        <div
          className="absolute top-0 w-full h-full bg-gray-900"
          style={{
            backgroundImage:
              'url(https://png.pngtree.com/background/20220725/original/pngtree-cartoon-pattern-paper-plane-comes-in-blue-tones-picture-image_1776666.jpg)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className=" w-full mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <Link to="/" className="inline-flex gap-2 items-center ">
                    <i className="fa fa-angle-left" />
                    <span>Back</span>
                  </Link>
                  <div className="text-center mb-3">
                    <h3 className="text-gray-600 text-sm font-bold">Sign in</h3>
                  </div>
                  <hr className="mt-6 border-b-1 border-gray-400" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="w-full mb-3 flex flex-col gap-y-2">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold"
                        htmlFor="grid-password"
                      >
                        Username
                      </label>
                      <Input type="text" name="username" placeholder="Username" control={control} />
                    </div>

                    <div className="w-full mb-3 flex flex-col gap-y-2">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <Input
                        type="password"
                        placeholder="Password"
                        name="password"
                        control={control}
                      />
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="submit"
                        style={{ transition: 'all .15s ease' }}
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login
