/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/label-has-associated-control */
import useNotification from '@hooks/useNotification'
import * as React from 'react'

const Contact: React.FunctionComponent = () => {
  const [notify] = useNotification()
  const handleSubmit = (): void => {
    notify("This action has been disabled. We're working on it!", {
      variant: 'warning',
    })
  }
  return (
    <div className="bg-gradient-to-b from-primary to-indigo-700 h-96 w-full">
      <div className="w-full flex items-center justify-center">
        <div className="absolute top-40 bg-white shadow rounded py-12 lg:px-28 px-8">
          <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
            Contact
          </p>
          <div className="md:flex items-center mt-12">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">Name</label>
              <input
                tabIndex={0}
                arial-label="Please input name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input  name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">
                Email Address
              </label>
              <input
                tabIndex={0}
                arial-label="Please input email address"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input email address"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-8">
            <div className="md:w-72 flex flex-col">
              <label className="text-base font-semibold leading-none text-gray-800">
                Company name
              </label>
              <input
                tabIndex={0}
                arial-label="Please input company name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 "
                placeholder="Please input company name"
              />
            </div>
            <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
              <label className="text-base font-semibold leading-none text-gray-800">Country</label>
              <input
                tabIndex={0}
                arial-label="Please input country name"
                type="name"
                className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100"
                placeholder="Please input country name"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-8">
              <label className="text-base font-semibold leading-none text-gray-800">Message</label>
              <textarea
                tabIndex={0}
                aria-label="leave a message"
                className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-100 resize-none"
              />
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <button
              className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-primary rounded hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:outline-none transition duration-300 ease-linear"
              type="button"
              onClick={handleSubmit}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
