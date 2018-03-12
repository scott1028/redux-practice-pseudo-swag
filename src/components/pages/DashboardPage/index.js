import React from 'react'
import { PageTemplate, Header, Footer, Heading, CreateChatButton } from 'components'
import { Dashboard } from 'containers'

const DashboardPage = () => {
  return (
    <PageTemplate header={<Header title="Dashboard" sideRightMenu={<CreateChatButton />} />} footer={<Footer />}>
      <Dashboard />
    </PageTemplate>
  )
}

export default DashboardPage
