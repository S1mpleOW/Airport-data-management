import Button from '@components/button/Button'
import DashboardHeading from '@modules/dashboard/DashboardHeading'
import PageAddNew from '@modules/page/PageAddNew'
import { CATEGORY_API } from '@utils/constant'
import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { data, schema } from './category.interfaces'

const FormAddCategory: React.FunctionComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="dashboard-page flex flex-col gap-3">
      <DashboardHeading title="Category" subtitle="Add new category">
        <Button type="button" onClick={() => navigate('/category')}>
          Back
        </Button>
      </DashboardHeading>
      <PageAddNew data={data} schema={schema} url={CATEGORY_API} />
    </div>
  )
}

export default FormAddCategory
