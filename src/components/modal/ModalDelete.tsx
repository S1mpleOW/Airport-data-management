import Button from '@components/button/Button'
import * as React from 'react'

interface IModalDeleteProps {
  title: string
  content: string
  handleDelete: () => Promise<void>
  handleClose: () => void
}

const ModalDelete: React.FunctionComponent<IModalDeleteProps> = ({
  handleClose,
  handleDelete,
  title,
  content,
}) => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-gray-500">{content}</p>
      <div className="flex gap-3 ml-auto">
        <Button
          className="btn btn-secondary bg-red-500 hover:bg-red-600 px-5 py-2 rounded-md text-white transition-all duration-200 ease-linear"
          onClick={handleClose}
          type="button"
        >
          Cancel
        </Button>
        <Button
          // className="btn btn-primary bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-md text-white transition-all duration-200 ease-linear"
          onClick={handleDelete}
          type="button"
        >
          Delete
        </Button>
      </div>
    </div>
  )
}

export default ModalDelete
