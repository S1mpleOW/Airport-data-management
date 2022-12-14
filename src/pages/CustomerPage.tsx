import Button from '@components/button/Button'
import Modal from '@components/modal/Modal'
import ModalDelete from '@components/modal/ModalDelete'
import ModalDetail from '@components/modal/ModalDetail'
import Table from '@components/table/Table'
import useNotification from '@hooks/useNotification'
import { ICustomerResponse } from '@modules/customers/customers.interface'
import ModalCustomer from '@modules/customers/ModalCustomer'
import DashboardHeading from '@modules/dashboard/DashboardHeading'
import { refetch } from '@store/data.reducer'
import { RootState } from '@store/store'
import { configHeaders, CUSTOMER_API } from '@utils/constant'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

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
    id: 'identityCard',
    title: 'Identity Card',
    sortable: false,
  },
  {
    id: 'phone',
    title: 'Phone',
    sortable: false,
  },
]

const CustomerPage: () => JSX.Element = () => {
  const [modalDeleted, setModalDeleted] = React.useState<boolean>(false)
  const [modalDetail, setModalDetail] = React.useState<boolean>(false)
  const [modalUpdate, setModalUpdate] = React.useState<boolean>(false)
  const [idFetch, setIdFetch] = React.useState<number | string>(0)
  const user = useSelector((state: RootState) => state.user)
  const [customers, setCustomers] = React.useState([])

  const { isFetching } = useSelector((state: RootState) => state.refetch)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [notify] = useNotification()

  const handleDelete = async (): Promise<void> => {
    if (idFetch === null) return
    const res = await fetch(`${CUSTOMER_API}${idFetch}`, {
      method: 'DELETE',
      ...configHeaders(user.accessToken),
    })
    if (res.status === 200) {
      setModalDeleted(false)
      setIdFetch(0)
      notify('Delete customer successfully', {
        variant: 'success',
      })
      dispatch(refetch())
    } else {
      notify('Delete customer failed', {
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
    void fetch(CUSTOMER_API, {
      method: 'GET',
      ...configHeaders(user.accessToken),
    })
      .then(async (res) => {
        return await res.json()
      })
      .then((res) => {
        const formatData = res.map((customer: ICustomerResponse) => {
          return {
            id: customer.customerID,
            name: customer.customerName,
            identityCard: customer.customerCMND,
            phone: customer.customerPhone,
          }
        })
        setCustomers(formatData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [dispatch, user.accessToken, isFetching])

  return (
    <div className="dashboard-page flex flex-col gap-3">
      <DashboardHeading
        title="Customers"
        subtitle="List of all customers"
        classNameTitle="text-transparent bg-clip-text bg-gradient-to-r to-primary from-sky-400 text-4xl font-bold"
      >
        <Button type="button" onClick={() => navigate('./new')}>
          Add new customer
        </Button>
      </DashboardHeading>
      <Table
        headers={headers}
        data={customers}
        isUpdateAble={{ show: true, onOpenModal: setModalUpdate, handleAction: setIdFetch }}
        isDeleteAble={{ show: true, onOpenModal: setModalDeleted, handleAction: setIdFetch }}
      />

      <Modal open={modalDeleted} handleClose={handleClose}>
        <ModalDelete
          title="Delete Customer"
          content="Are you sure you want to delete this customer? This action will be undone."
          handleDelete={handleDelete}
          handleClose={handleClose}
        />
      </Modal>

      <Modal open={modalDetail} handleClose={handleClose}>
        <ModalDetail />
      </Modal>

      <Modal open={modalUpdate} handleClose={handleClose}>
        <ModalCustomer title="Update customer" id={idFetch} />
      </Modal>
    </div>
  )
}

export default CustomerPage
