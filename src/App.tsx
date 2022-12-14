import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import ErrorPage from '@pages/ErrorPage'
// import { DashboardLayout } from '@modules/dashboard'
// import TicketPage from '@pages/TicketPage'
// import CategoryPage from '@pages/CategoryPage'
// import CustomerPage from '@pages/CustomerPage'
// import AirportPage from '@pages/AirportPage'
// import FlightPage from '@pages/FlightPage'
// import Login from '@pages/Login'
// import Home from '@pages/Home'
// import HomeLayout from '@modules/home/HomeLayout'
// import Contact from '@pages/Contact'
// import FormAddCustomer from '@modules/customers/FormAddCustomer'
// import FormAddTicket from '@modules/ticket/FormAddTicket'
// import FormAddCategory from '@modules/category/FormAddCategory'
// import FormAddAirport from '@modules/airport/FormAddAirport'
// import FormAddFlight from '@modules/flight/FormAddFlight'
import { Provider } from 'react-redux'
import store from '@store/store'
import React, { Suspense } from 'react'
import Loading from '@components/loading/Loading'

const Login = React.lazy(
  async (): Promise<typeof import('@pages/Login')> => await import('@pages/Login')
)

const ErrorPage = React.lazy(
  async (): Promise<typeof import('@pages/ErrorPage')> => await import('@pages/ErrorPage')
)

const Home = React.lazy(
  async (): Promise<typeof import('@pages/Home')> => await import('@pages/Home')
)

const HomeLayout = React.lazy(
  async (): Promise<typeof import('@modules/home/HomeLayout')> =>
    await import('@modules/home/HomeLayout')
)

const Contact = React.lazy(
  async (): Promise<typeof import('@pages/Contact')> => await import('@pages/Contact')
)

const DashboardLayout = React.lazy(
  async (): Promise<typeof import('@modules/dashboard/DashboardLayout')> =>
    await import('@modules/dashboard/DashboardLayout')
)

const TicketPage = React.lazy(
  async (): Promise<typeof import('@pages/TicketPage')> => await import('@pages/TicketPage')
)

const CategoryPage = React.lazy(
  async (): Promise<typeof import('@pages/CategoryPage')> => await import('@pages/CategoryPage')
)

const CustomerPage = React.lazy(
  async (): Promise<typeof import('@pages/CustomerPage')> => await import('@pages/CustomerPage')
)

const AirportPage = React.lazy(
  async (): Promise<typeof import('@pages/AirportPage')> => await import('@pages/AirportPage')
)

const FlightPage = React.lazy(
  async (): Promise<typeof import('@pages/FlightPage')> => await import('@pages/FlightPage')
)

const FormAddCustomer = React.lazy(
  async (): Promise<typeof import('@modules/customers/FormAddCustomer')> =>
    await import('@modules/customers/FormAddCustomer')
)

const FormAddTicket = React.lazy(
  async (): Promise<typeof import('@modules/ticket/FormAddTicket')> =>
    await import('@modules/ticket/FormAddTicket')
)

const FormAddCategory = React.lazy(
  async (): Promise<typeof import('@modules/category/FormAddCategory')> =>
    await import('@modules/category/FormAddCategory')
)

const FormAddAirport = React.lazy(
  async (): Promise<typeof import('@modules/airport/FormAddAirport')> =>
    await import('@modules/airport/FormAddAirport')
)

const FormAddFlight = React.lazy(
  async (): Promise<typeof import('@modules/flight/FormAddFlight')> =>
    await import('@modules/flight/FormAddFlight')
)

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/ticket/new',
        element: <FormAddTicket />,
      },
      {
        path: '/ticket',
        element: <TicketPage />,
      },
      {
        path: '/category/new',
        element: <FormAddCategory />,
      },
      {
        path: '/category',
        element: <CategoryPage />,
      },
      {
        path: '/customer/new',
        element: <FormAddCustomer />,
      },

      {
        path: '/customer',
        element: <CustomerPage />,
      },
      {
        path: '/flight/new',
        element: <FormAddFlight />,
      },
      {
        path: '/flight',
        element: <FlightPage />,
      },
      {
        path: '/airport/new',
        element: <FormAddAirport />,
      },
      {
        path: '/airport',
        element: <AirportPage />,
      },
    ],
  },
])

function App(): React.ReactElement {
  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
          <div
            className="absolute inset-0 bg-black bg-opacity-25 overlay hover:cursor-pointer flex items-center justify-center"
            aria-hidden="true"
          >
            <Loading />
          </div>
        </div>
      }
    >
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </Suspense>
  )
}

export default App
