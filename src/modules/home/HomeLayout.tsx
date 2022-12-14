import Header from '@components/header/Header'
import Topnav from '@components/topnav/Topnav'
import * as React from 'react'
import { Outlet } from 'react-router-dom'

const HomeLayout: React.FunctionComponent<{}> = (props) => {
  return (
    <div>
      <Header border shadow className="bg-gray-100">
        <Topnav />
      </Header>
      <div className="px-5 md:px-0 ">
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout
