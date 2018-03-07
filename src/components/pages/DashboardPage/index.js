import React from 'react'
import { PageTemplate, Header, Footer, Heading } from 'components'
import { Dashboard } from 'containers'

const DashboardPage = () => {
  return (
    <PageTemplate header={<Header title="Pseudo Swag Dashboard" />} footer={<Footer />}>
      <Dashboard />
    </PageTemplate>
  )
}

export default DashboardPage
