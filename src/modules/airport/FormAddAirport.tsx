import Button from '@components/button/Button'
import DashboardHeading from '@modules/dashboard/DashboardHeading'
import PageAddNew from '@modules/page/PageAddNew'
import { AIRPORT_API } from '@utils/constant'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { data, schema } from './airport.interface'

const FormAddAirport: React.FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="dashboard-page flex flex-col gap-3">
      <DashboardHeading title="Airport" subtitle="Add new airport">
        <Button type="button" onClick={() => navigate('/airport')}>
          Back
        </Button>
      </DashboardHeading>
      <PageAddNew data={data} schema={schema} url={AIRPORT_API} />
    </div>
  )
}

export default FormAddAirport
