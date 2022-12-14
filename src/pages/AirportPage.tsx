import DashboardHeading from '@modules/dashboard/DashboardHeading'
import Table from '@components/table/Table'
import React, { useEffect, useState } from 'react'
import { AIRPORT_API, configHeaders } from '@utils/constant'
import { RootState } from '@store/store'
import { useDispatch, useSelector } from 'react-redux'
import { IAirport } from '@modules/airport/airport.interface'
import { useNavigate } from 'react-router-dom'
import useNotification from '@hooks/useNotification'
import Button from '@components/button/Button'
import { refetch } from '@store/data.reducer'
import ModalDelete from '@components/modal/ModalDelete'
import Modal from '@components/modal/Modal'
import ModalAirportUpdate from '@modules/airport/ModalAirportUpdate'

const headers = [
  {
    id: 'id',
    title: 'ID',
    sortable: true,
  },
  {
    id: 'name',
    title: 'Name',
    sortable: false,
  },
  {
    id: 'location',
    title: 'Location',
    sortable: false,
  },
]

const AirportPage: () => JSX.Element = () => {
  const [airports, setAirports] = useState([])
  const user = useSelector((state: RootState) => state.user)
  const [modalDeleted, setModalDeleted] = React.useState<boolean>(false)
  const [modalDetail, setModalDetail] = React.useState<boolean>(false)
  const [modalUpdate, setModalUpdate] = React.useState<boolean>(false)
  const [idFetch, setIdFetch] = React.useState<number | string>(0)
  const { isFetching } = useSelector((state: RootState) => state.refetch)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [notify] = useNotification()
  const handleDelete = async (): Promise<void> => {
    if (idFetch === null) return
    const res = await fetch(`${AIRPORT_API}${idFetch}`, {
      method: 'DELETE',
      ...configHeaders(user.accessToken),
    })
    if (res.status === 200) {
      setModalDeleted(false)
      setIdFetch(0)
      dispatch(refetch())
      notify("You've successfully deleted airport", {
        variant: 'success',
      })
    } else {
      notify("You've failed to delete airport", {
        variant: 'error',
      })
    }
  }
  const handleClose = (): void => {
    setModalUpdate(false)
    setModalDeleted(false)
    setModalDetail(false)
    setIdFetch(0)
  }
  useEffect(() => {
    void fetch(AIRPORT_API, {
      method: 'GET',
      ...configHeaders(user.accessToken),
    })
      .then(async (res) => {
        return await res.json()
      })
      .then((res) => {
        const formatData = res.map((airport: IAirport) => {
          return {
            id: airport.airportID,
            name: airport.airportName,
            location: airport.airportLocation,
          }
        })
        setAirports(formatData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [user.accessToken, isFetching, dispatch])

  return (
    <div className="dashboard-page flex flex-col gap-3">
      <DashboardHeading
        title="Airports"
        subtitle="List of all airports"
        classNameTitle="text-transparent bg-clip-text bg-gradient-to-r to-primary from-sky-400 text-4xl font-bold"
      >
        <Button type="button" onClick={() => navigate('./new')}>
          Add new airport
        </Button>
      </DashboardHeading>
      <Table
        headers={headers}
        data={airports}
        isUpdateAble={{ show: true, onOpenModal: setModalUpdate, handleAction: setIdFetch }}
        isDeleteAble={{ show: true, onOpenModal: setModalDeleted, handleAction: setIdFetch }}
      />
      <Modal open={modalDeleted} handleClose={handleClose}>
        <ModalDelete
          title="Delete this airport?"
          content="Are you sure you want to delete this category? This action will be undone."
          handleDelete={handleDelete}
          handleClose={handleClose}
        />
      </Modal>
      <Modal open={modalUpdate} handleClose={handleClose}>
        <ModalAirportUpdate title="Update airport" id={idFetch} />
      </Modal>
    </div>
  )
}

export default AirportPage
