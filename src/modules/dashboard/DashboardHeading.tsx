import * as React from 'react'

interface IDashboardHeadingProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  classNameTitle?: string
}

const DashboardHeading: React.FunctionComponent<IDashboardHeadingProps> = ({
  title,
  subtitle,
  children,
  classNameTitle = 'text-transparent bg-clip-text bg-gradient-to-r to-primary from-sky-400 text-4xl font-bold',
}: IDashboardHeadingProps) => {
  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-col justify-center gap-3">
        <h1 className={`dashboard-heading ${classNameTitle}`}>{title}</h1>
        <p className="dashboard-short-desc">{subtitle}</p>
      </div>
      {children}
    </div>
  )
}

export default DashboardHeading
