/* eslint-disable react/button-has-type */
import Topnav from '@components/topnav/Topnav'
import * as React from 'react'
import Dropdown from '@components/dropdown/Dropdown'
import DropdownList from '@components/dropdown/DropdownList'
import useDetectOutsideClick from '@hooks/useDetectOutsideClick'
import DropdownOption from '@components/dropdown/DropdownOption'
import Header from '@components/header/Header'
import { useDispatch } from 'react-redux'
import { logout } from '@store/user.reducer'
import { useNavigate } from 'react-router-dom'
import useNotification from '@hooks/useNotification'

interface IDashboardHeaderProps {
  children?: React.ReactNode
}

const DashboardHeader: React.FC<IDashboardHeaderProps> = ({ children }: IDashboardHeaderProps) => {
  const dropdownRef = React.useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [, setIsActive] = useDetectOutsideClick({
    elements: dropdownRef,
  })
  const [notify] = useNotification()
  const onClick = (): void => {
    setIsActive(true)
  }

  const handleLogout = (): void => {
    dispatch(logout())
    navigate('/')
  }

  const handleShowProfile = (): void => {
    notify("This feature is not available yet. We're working on it!", {
      variant: 'warning',
    })
  }

  return (
    <Header height="auto">
      <Topnav />
      <div className="flex items-center gap-5">
        <button className="header-avatar w-[52px] h-[52px] border-none" onClick={onClick}>
          <img
            src="https://w7.pngwing.com/pngs/708/467/png-transparent-avatar-default-head-person-unknown-user-anonym-user-pictures-icon-thumbnail.png"
            alt="avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </button>
        <Dropdown ref={dropdownRef}>
          <DropdownList>
            <DropdownOption onClick={handleShowProfile}>Profile</DropdownOption>
            <DropdownOption onClick={handleLogout}>Sign out</DropdownOption>
          </DropdownList>
        </Dropdown>
      </div>
    </Header>
  )
}

export default DashboardHeader
