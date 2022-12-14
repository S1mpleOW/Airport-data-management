import DarkmodeToggle from '@components/toggle/DarkmodeToggle'
import useToggle from '@hooks/useToggle'
import * as React from 'react'
import { NavLink } from 'react-router-dom'

interface ITopnavProps {
  children?: React.ReactNode
}

const isActiveClassName = (isActive: boolean): string => {
  return `${
    isActive ? '!text-white !bg-primary ' : ''
  } p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-primary hover:text-white transition-all duration-300 ease-linear text-black`
}

const Topnav: React.FC<ITopnavProps> = ({ children }: ITopnavProps) => {
  const [open, handleToggle] = useToggle(false)
  return (
    <>
      {children}
      <button
        data-collapse-toggle="navbar-solid-bg"
        type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-solid-bg"
        aria-expanded={open}
        onClick={handleToggle}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`${
          !open ? '' : '!block absolute top-[calc(100%-20px)] left-0 z-10'
        } hidden w-full md:block md:w-auto md:relative md:top-auto md:left-auto md:z-auto md:shadow-none md:bg-transparent md:border-none md:overflow-visible`}
        id="navbar-solid-bg"
      >
        <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActiveClassName(isActive)}
              aria-current="page"
            >
              Home
            </NavLink>
          </li>

          {/* <li>
            <a
              href="#"
              className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-primary md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
            >
              Tickets available
            </a>
          </li> */}

          <li>
            <NavLink to="/contact" className={({ isActive }) => isActiveClassName(isActive)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <DarkmodeToggle />
    </>
  )
}

export default Topnav
