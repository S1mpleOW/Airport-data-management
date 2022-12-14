/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable react/no-unescaped-entities */
import * as React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FunctionComponent<{}> = (props) => {
  return (
    <div
      className="pt-20 flex items-center justify-start flex-col"
      style={{
        background: "url('/public/homepage-bg.png') no-repeat center center fixed",
        backgroundSize: 'contain',
        height: 'calc(100vh - 94px)',
      }}
    >
      <h1 className="xl:text-4xl text-3xl text-primary font-extrabold pb-6 mx-auto">
        Airport data management website
      </h1>
      <p className="text-zinc-400 font-semibold text-lg pb-3">
        This is the website to manage plane ticket
      </p>
      <Link
        to="/login"
        className="bg-primary text-white text-lg font-medium py-2 px-4 rounded-md hover:bg-primary-dark inline-block mt-4 max-w-[200px] p-2 dark:text-white hover:bg-indigo-700 dark:hover:bg-gray-700 transition-all duration-300 ease-linear"
      >
        Get Started
      </Link>
    </div>
  )
}

export default Home
