import Table from '@components/table/Table'
import DashboardHeading from '@modules/dashboard/DashboardHeading'

// const headers = [
//   {
//     id: 'name',
//     title: 'Name',
//   },
//   {
//     id: 'email',
//     title: 'Email',
//   }
// ]

const DashboardPage: () => JSX.Element = () => {
  return (
    <div className="dashboard-page flex flex-col gap-3">
      <DashboardHeading
        title="Dashboard"
        classNameTitle="text-transparent bg-clip-text bg-gradient-to-r to-primary from-sky-400 text-4xl font-bold"
      />
      {/* <Table  /> */}
    </div>
  )
}

export default DashboardPage

// <div className="overflow-x-auto relative shadow-md sm:rounded-lg max-h-[700px]">
// {
/* <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400 sticky top-0">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Color
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Accesories
              </th>
              <th scope="col" className="py-3 px-6">
                Available
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Weight
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6">3.0 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6">3.0 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6">3.0 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6">3.0 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6">3.0 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6">Laptop PC</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$1999</td>
              <td className="py-4 px-6">1.0 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">$99</td>
              <td className="py-4 px-6">0.2 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple Watch
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Watches</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">$199</td>
              <td className="py-4 px-6">0.12 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple iMac
              </th>
              <td className="py-4 px-6">Silver</td>
              <td className="py-4 px-6">PC</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$2999</td>
              <td className="py-4 px-6">7.0 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple AirPods
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$399</td>
              <td className="py-4 px-6">38 g</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                iPad Pro
              </th>
              <td className="py-4 px-6">Gold</td>
              <td className="py-4 px-6">Tablet</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$699</td>
              <td className="py-4 px-6">1.3 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Magic Keyboard
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">$99</td>
              <td className="py-4 px-6">453 g</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Apple TV 4K
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">TV</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">$179</td>
              <td className="py-4 px-6">1.78 lb.</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                <div className="flex items-center">
                  {/* <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                </div>
              </td>
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                AirTag
              </th>
              <td className="py-4 px-6">Silver</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">Yes</td>
              <td className="py-4 px-6">No</td>
              <td className="py-4 px-6">$29</td>
              <td className="py-4 px-6">53 g</td>
              <td className="flex items-center py-4 px-6 space-x-3">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </table> */
// }
// </div>
