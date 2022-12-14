import ModalUpdate from '@components/modal/ModalUpdate'
import ModalUpdateChild from '@components/modal/_ModalUpdateChild'
import { CUSTOMER_API } from '@utils/constant'
import { data, schema } from './customers.interface'

interface IModalCustomerProps {
  title: string
  id: number | string
}

const ModalCustomer: React.FunctionComponent<IModalCustomerProps> = ({ title, id }) => {
  return (
    <ModalUpdate title={title}>
      <ModalUpdateChild schema={schema} id={id} data={data} url={CUSTOMER_API} />
    </ModalUpdate>
  )
}

export default ModalCustomer
