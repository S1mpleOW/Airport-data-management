import Button from '@components/button/Button'
import Modal from '@components/modal/Modal'
import ModalDelete from '@components/modal/ModalDelete'
import Table from '@components/table/Table'
import useNotification from '@hooks/useNotification'
import DashboardHeading from '@modules/dashboard/DashboardHeading'
import { IFlightResponse } from '@modules/flight/fight.interface'
import ModalFlightUpdate from '@modules/flight/ModalFlightUpdate'
import { refetch } from '@store/data.reducer'
import { RootState } from '@store/store'
import { configHeaders, FLIGHT_API } from '@utils/constant'
import { formatDate, formatTime } from '@utils/helper'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const headers = [
  {
    id: 'id',
    title: 'ID',
    sortable: true,
  },
  {
    id: 'numberOfSeats',
    title: 'Number of seats',
    sortable: false,
  },
  {
    id: 'departureTime',
    title: 'Departure time',
    sortable: false,
  },
  {
    id: 'departureDate',
    title: 'Departure date',
    sortable: false,
  },
  {
    id: 'departureAirport',
    title: 'Departure airport',
    sortable: false,
  },
  {
    id: 'arriveAirport',
    title: 'Arrival airport',
    sortable: false,
  },
]

const FlightPage: () => JSX.Element = () => {
  const [flights, setFlights] = useState([])
  const user = useSelector((state: RootState) => state.user)
  const [modalDeleted, setModalDeleted] = React.useState<boolean>(false)
  // const [modalDetail, setModalDetail] = React.useState<boolean>(false)
  const [modalUpdate, setModalUpdate] = React.useState<boolean>(false)
  const [idFetch, setIdFetch] = React.useState<number | string>(0)
  const { isFetching } = useSelector((state: RootState) => state.refetch)
  const [notify] = useNotification()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleDelete = async (): Promise<void> => {
    if (idFetch === null) return
    const res = await fetch(`${FLIGHT_API}${idFetch}`, {
      method: 'DELETE',
      ...configHeaders(user.accessToken),
    })
    if (res.status === 200) {
      setModalDeleted(false)
      setIdFetch(0)
      dispatch(refetch())
      notify('Delete flight data successfully', {
        variant: 'success',
      })
    } else {
      notify('Delete flight data failed', {
        variant: 'error',
      })
    }
  }
  const handleClose = (): void => {
    setModalUpdate(false)
    setModalDeleted(false)
    // setModalDetail(false)
    setIdFetch(0)
  }
  useEffect(() => {
    void fetch(FLIGHT_API, {
      method: 'GET',
      ...configHeaders(user.accessToken),
    })
      .then(async (res) => {
        return await res.json()
      })
      .then((res) => {
        const formatData = res.map((flight: IFlightResponse) => {
          return {
            id: flight.flightID,
            numberOfSeats: flight.numberOfSeat,
            departureDate: formatDate(flight.departureDate),
            departureTime: formatTime(flight.departureTime),
            departureAirport: flight.departureAirport.airportName,
            arriveAirport: flight.arriveAirport.airportName,
          }
        })
        setFlights(formatData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [user.accessToken, isFetching, dispatch])

  return (
    <div className="dashboard-page flex flex-col gap-3">
      <DashboardHeading
        title="Flights"
        subtitle="List of all flights"
        classNameTitle="text-transparent bg-clip-text bg-gradient-to-r to-primary from-sky-400 text-4xl font-bold"
      >
        <Button type="button" onClick={() => navigate('./new')}>
          Add new flight
        </Button>
      </DashboardHeading>
      <Table
        headers={headers}
        data={flights}
        isUpdateAble={{ show: true, onOpenModal: setModalUpdate, handleAction: setIdFetch }}
        isDeleteAble={{ show: true, onOpenModal: setModalDeleted, handleAction: setIdFetch }}
      />
      <Modal open={modalDeleted} handleClose={handleClose}>
        <ModalDelete
          title="Delete Flight"
          content="Are you sure you want to delete this flight? This action will be undone."
          handleDelete={handleDelete}
          handleClose={handleClose}
        />
      </Modal>

      {/* <Modal open={modalDetail} handleClose={handleClose}>
        <ModalDetail />
      </Modal> */}

      <Modal open={modalUpdate} handleClose={handleClose}>
        <ModalFlightUpdate title="Ticket" id={idFetch} />
      </Modal>
    </div>
  )
}

export default FlightPage
