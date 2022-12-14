import ModalUpdate from '@components/modal/ModalUpdate'
import ModalUpdateChild from '@components/modal/_ModalUpdateChild'
import { CATEGORY_API } from '@utils/constant'
import * as React from 'react'
import { data, schema } from './category.interfaces'

interface IModalCategoryUpdateProps {
  title: string
  id: number | string
}

const ModalCategoryUpdate: React.FunctionComponent<IModalCategoryUpdateProps> = ({ title, id }) => {
  return (
    <ModalUpdate title={title}>
      <ModalUpdateChild schema={schema} data={data} id={id} url={CATEGORY_API} />
    </ModalUpdate>
  )
}

export default ModalCategoryUpdate
