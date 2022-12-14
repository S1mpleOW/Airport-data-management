/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useContext, useState, PropsWithChildren } from 'react'

interface IContextDropdown {
  isActive: boolean
  handleToggleDropdown: () => void
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownContext = createContext({} as IContextDropdown)

function DropdownProvider({ children }: PropsWithChildren): React.ReactElement<IContextDropdown> {
  const [isActive, setIsActive] = useState(false)
  const handleToggleDropdown = (): void => {
    setIsActive((prev: boolean) => !prev)
  }

  return (
    <DropdownContext.Provider
      value={{
        isActive,
        handleToggleDropdown,
        setIsActive,
      }}
    >
      {children}
    </DropdownContext.Provider>
  )
}

function useDropdown(): IContextDropdown {
  const context = useContext(DropdownContext)
  if (typeof context === 'undefined' || context === null) {
    throw new Error('useDropdown must be used within DropdownProvider')
  }
  return context
}

export { useDropdown, DropdownProvider }
