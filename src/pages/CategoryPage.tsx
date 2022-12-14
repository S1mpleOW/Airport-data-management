import Button from '@components/button/Button'
import Modal from '@components/modal/Modal'
import ModalDelete from '@components/modal/ModalDelete'
import Table from '@components/table/Table'
import useNotification from '@hooks/useNotification'
import { ICategoryResponse } from '@modules/category/category.interfaces'
import ModalCategoryUpdate from '@modules/category/ModalCategoryUpdate'
import DashboardHeading from '@modules/dashboard/DashboardHeading'
import { refetch } from '@store/data.reducer'
import { RootState } from '@store/store'
import { CATEGORY_API, configHeaders } from '@utils/constant'
import { formatCurrencies } from '@utils/helper'
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
    id: 'name',
    title: 'Ticket name',
    sortable: false,
  },
  {
    id: 'price',
    title: 'Price',
    sortable: false,
  },
  {
    id: 'serviceFee',
    title: 'Service fee',
    sortable: false,
  },
]

const CategoryPage: React.FC = () => {
  const [categories, setCategories] = useState([])
  const [modalDeleted, setModalDeleted] = React.useState<boolean>(false)
  const [modalDetail, setModalDetail] = React.useState<boolean>(false)
  const [modalUpdate, setModalUpdate] = React.useState<boolean>(false)
  const [idFetch, setIdFetch] = React.useState<number | string>(0)
  const user = useSelector((state: RootState) => state.user)
  const { isLoading, isFetching } = useSelector((state: RootState) => state.refetch)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [notify] = useNotification()

  const handleDelete = async (): Promise<void> => {
    if (idFetch === null) return
    const res = await fetch(`${CATEGORY_API}${idFetch}`, {
      method: 'DELETE',
      ...configHeaders(user.accessToken),
    })
    if (res.status === 200) {
      setModalDeleted(false)
      setIdFetch(0)
      notify('Delete category successfully', {
        variant: 'success',
      })
      dispatch(refetch())
    } else {
      notify('Delete category failed', {
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
    void fetch(CATEGORY_API, {
      method: 'GET',
      ...configHeaders(user.accessToken),
    })
      .then(async (res) => {
        return await res.json()
      })
      .then((res) => {
        const formatData = res.map((category: ICategoryResponse) => {
          return {
            id: category.ticketTypeID,
            name: category.ticketTypeName,
            price: formatCurrencies(category.ticketTypePrice),
            serviceFee: formatCurrencies(category.serviceFee),
          }
        })
        setCategories(formatData)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [user.accessToken, isFetching, dispatch])

  return (
    <div className="dashboard-page flex flex-col gap-3">
      <DashboardHeading
        title="Categories"
        subtitle="List of all categories"
        classNameTitle="text-transparent bg-clip-text bg-gradient-to-r to-primary from-sky-400 text-4xl font-bold"
      >
        <Button type="button" onClick={() => navigate('./new')}>
          Add new category
        </Button>
      </DashboardHeading>
      <Table
        headers={headers}
        data={categories}
        isUpdateAble={{ show: true, onOpenModal: setModalUpdate, handleAction: setIdFetch }}
        isDeleteAble={{ show: true, onOpenModal: setModalDeleted, handleAction: setIdFetch }}
      />
      <Modal open={modalDeleted} handleClose={handleClose}>
        <ModalDelete
          title="Delete this category?"
          content="Are you sure you want to delete this category? This action will be undone."
          handleDelete={handleDelete}
          handleClose={handleClose}
        />
      </Modal>

      {/* <Modal open={modalDetail} handleClose={handleClose}>
        <ModalDetail />
      </Modal> */}

      <Modal open={modalUpdate} handleClose={handleClose}>
        <ModalCategoryUpdate title="Update customer" id={idFetch} />
      </Modal>
    </div>
  )
}

export default CategoryPage
