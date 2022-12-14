import * as React from 'react'

interface IHeaders {
  id: number | string
  title: string
  className?: string
  sortable?: boolean
}

interface IData {
  [key: string]: string | number
}

interface GenericAction<T> {
  show: T
  onOpenModal: React.Dispatch<React.SetStateAction<T>>
  handleAction: React.Dispatch<React.SetStateAction<number | string>>
}

interface ITableProps {
  headers: IHeaders[]
  data: IData[]
  isDeleteAble?: GenericAction<boolean>
  isUpdateAble?: GenericAction<boolean>
  hasDetails?: GenericAction<boolean>
}

const classBTN = `inline-flex items-center gap-2 justify-center px-4 py-2 font-sans font-semibold tracking-wide text-white rounded-lg max-w-[200px] min-w-[100px] hover:-translate-y-[3px] transition duration-300 ease-in-out`

const Table: React.FunctionComponent<ITableProps> = ({
  headers,
  data,
  isDeleteAble = {
    show: false,
    onOpenModal: () => {},
    handleAction: () => {},
  },
  isUpdateAble = {
    show: false,
    onOpenModal: () => {},
    handleAction: () => {},
  },
  hasDetails = {
    show: false,
    onOpenModal: () => {},
    handleAction: () => {},
  },
}: ITableProps) => {
  return (
    <div className=" relative shadow-md sm:rounded-lg max-h-[700px] -z-10 md:z-0 overflow-x-scroll lg:max-w-[1300px] xl:max-w-none">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400 sticky top-0">
          <tr>
            {headers.map((header: IHeaders) => (
              <th key={header.id} scope="col" className="py-3 px-6 whitespace-nowrap">
                {header.title}
              </th>
            ))}
            {isUpdateAble.show || isDeleteAble.show || hasDetails.show ? (
              <th scope="col" className="py-3 px-6 text-center">
                Actions
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 && (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="py-3 px-6 " colSpan={headers.length + 1}>
                <div className="flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">No data found</span>
                </div>
              </td>
            </tr>
          )}
          {data.map((item: IData) => (
            <tr
              key={item.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-300 ease-in-out"
            >
              {headers.map((header: IHeaders) => (
                <td key={header.id} className="py-3 px-6 whitespace-nowrap">
                  {item[header.id]}
                </td>
              ))}
              <td
                className={`flex items-center gap-3 justify-center w-full py-3 px-6 ${
                  hasDetails.show || isUpdateAble.show || isDeleteAble.show ? `` : `hidden`
                } `}
              >
                {hasDetails.show && (
                  <button
                    className={`${classBTN} bg-teal-800`}
                    type="button"
                    onClick={() => {
                      hasDetails.onOpenModal(true)
                      hasDetails.handleAction(item.id as number)
                    }}
                  >
                    <i className="fa fa-eye" />
                    <span>Details</span>
                  </button>
                )}
                {isUpdateAble.show && (
                  <button
                    type="button"
                    className={`${classBTN} bg-orange-400`}
                    onClick={() => {
                      isUpdateAble.onOpenModal(true)
                      isUpdateAble.handleAction(item.id as number)
                    }}
                  >
                    <i className="fa fa-edit" />
                    <span>Edit</span>
                  </button>
                )}
                {isDeleteAble.show && (
                  <button
                    className={`${classBTN} bg-red-600`}
                    type="button"
                    onClick={() => {
                      isDeleteAble.onOpenModal(true)
                      isDeleteAble.handleAction(item.id as number)
                    }}
                  >
                    <i className="fa fa-trash" />
                    <span>Delete</span>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
