import React from 'react'
import { PageTemplate, Header, Footer, Heading } from 'components'
import { Dashboard, UserCreateChatButton } from 'containers'

const DashboardPage = () => {
  return (
    <PageTemplate header={<Header title="Dashboard" sideRightMenu={<UserCreateChatButton />} />} footer={<Footer />}>
      <Dashboard />
    </PageTemplate>
  )
}

export default DashboardPage
