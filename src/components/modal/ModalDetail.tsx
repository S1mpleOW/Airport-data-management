import * as React from 'react'

interface IModalDetailProps {}

const ModalDetail: React.FunctionComponent<IModalDetailProps> = (props) => {
  return (
    <form className="flex border border-slate-200 rounded-xl w-[400px]" aria-label="simple-form">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Enter your content"
          className="w-full p-3 bg-transparent outline-none"
        />
      </div>
      <button
        type="button"
        className="flex-shrink-0 p-3 font-bold text-white bg-blue-500 rounded-xl"
      >
        Subscribe
      </button>
    </form>
  )
}

export default ModalDetail
