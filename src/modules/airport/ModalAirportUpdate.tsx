import ModalUpdate from '@components/modal/ModalUpdate'
import ModalUpdateChild from '@components/modal/_ModalUpdateChild'
import { AIRPORT_API } from '@utils/constant'
import * as React from 'react'
import { data, schema } from './airport.interface'

interface IModalAirportUpdateProps {
  title: string
  id: number | string
}

const ModalAirportUpdate: React.FunctionComponent<IModalAirportUpdateProps> = ({ title, id }) => {
  return (
    <ModalUpdate title={title}>
      <ModalUpdateChild schema={schema} data={data} id={id} url={AIRPORT_API} />
    </ModalUpdate>
  )
}

export default ModalAirportUpdate
