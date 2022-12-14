import Button from '@components/button/Button'
import Modal from '@components/modal/Modal'
import ModalDelete from '@components/modal/ModalDelete'
import Table from '@components/table/Table'
import useNotification from '@hooks/useNotification'
import DashboardHeading from '@modules/dashboard/DashboardHeading'
import ModalTicket from '@modules/ticket/ModalTicket'
import { ITicketResponse } from '@modules/ticket/ticket.interface'
import { refetch } from '@store/data.reducer'
import { RootState } from '@store/store'
import { configHeaders, TICKET_API } from '@utils/constant'
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
    id: 'bookingDate',
    title: 'Booking date',
    sortable: false,
  },
  {
    id: 'receiptDate',
    title: 'Receipt date',
    sortable: false,
  },
  {
    id: 'departureTime',
    title: 'Departure time',
    sortable: false,
  },
  {
    id: 'customerName',
    title: 'Customer name',
    sortable: false,
  },
  {
    id: 'ticketType',
    title: 'Ticket type',
    sortable: false,
  },
]

const TicketPage: React.FC = () => {
  const [tickets, setTickets] = useState([])
  const user = useSelector((state: RootState) => state.user)
  const [modalDeleted, setModalDeleted] = React.useState<boolean>(false)
  const [modalDetail, setModalDetail] = React.useState<boolean>(false)
  const [modalUpdate, setModalUpdate] = React.useState<boolean>(false)
  const [idFetch, setIdFetch] = React.useState<number | string>(0)
  const { isFetching } = useSelector((state: RootState) => state.refetch)
  const [notify] = useNotification()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleDelete = async (): Promise<void> => {
    if (idFetch === null) return
    const res = await fetch(`${TICKET_API}${idFetch}`, {
      method: 'DELETE',
      ...configHeaders(user.accessToken),
    })
    if (res.status === 200) {
      setModalDeleted(false)
      setIdFetch(0)
      dispatch(refetch())
      notify('Delete ticket successfully', {
        variant: 'success',
      })
    } else {
      notify('Delete ticket failed', {
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
    void fetch(TICKET_API, {
      method: 'GET',
      ...configHeaders(user.accessToken),
    })
      .then(async (res) => {
        return await res.json()
      })
      .then((res) => {
        const formatData = res.map((ticket: ITicketResponse) => {
          return {
            id: ticket.ticketNumber,
            bookingDate: formatDate(ticket.bookingDate),
            receiptDate: formatDate(ticket.receiptDate),
            departureTime: formatTime(ticket.flight.departureTime),
            customerName: ticket.customer.customerName,
            ticketType: ticket.ticketType.ticketTypeName,
          }
        })
        setTickets(formatData)
      })
      .finally(() => {})
  }, [user.accessToken, isFetching, dispatch])

  return (
    <div className="dashboard-page flex flex-col gap-3">
      <DashboardHeading
        title="Tickets"
        subtitle="List of all tickets"
        classNameTitle="text-transparent bg-clip-text bg-gradient-to-r to-primary from-sky-400 text-4xl font-bold"
      >
        <Button type="button" onClick={() => navigate('./new')}>
          Add new ticket
        </Button>
      </DashboardHeading>
      <Table
        headers={headers}
        data={tickets}
        isUpdateAble={{ show: true, onOpenModal: setModalUpdate, handleAction: setIdFetch }}
        // hasDetails={{ show: true, onOpenModal: setModalDetail, handleAction: setIdFetch }}
        isDeleteAble={{ show: true, onOpenModal: setModalDeleted, handleAction: setIdFetch }}
      />
      <Modal open={modalDeleted} handleClose={handleClose}>
        <ModalDelete
          title="Delete ticket"
          content="Are you sure you want to delete this ticket? This action will be undone."
          handleDelete={handleDelete}
          handleClose={handleClose}
        />
      </Modal>

      {/* <Modal open={modalDetail} handleClose={handleClose}>
        <ModalDetail />
      </Modal> */}

      <Modal open={modalUpdate} handleClose={handleClose}>
        <ModalTicket title="Ticket" id={idFetch} />
      </Modal>
    </div>
  )
}

export default TicketPage
