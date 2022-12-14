import Button from '@components/button/Button'
import DashboardHeading from '@modules/dashboard/DashboardHeading'
import PageAddNew from '@modules/page/PageAddNew'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { CUSTOMER_API } from '@utils/constant'
import { data, schema } from './customers.interface'

const FormAddCustomer: React.FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="dashboard-page flex flex-col gap-3">
      <DashboardHeading title="Customers" subtitle="Add new customer">
        <Button type="button" onClick={() => navigate('/customer')}>
          Back
        </Button>
      </DashboardHeading>
      <PageAddNew data={data} schema={schema} url={CUSTOMER_API} />
    </div>
  )
}

export default FormAddCustomer
