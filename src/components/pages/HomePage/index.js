// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { PageTemplate, Header, Hero, Footer, FeatureList } from 'components'
import { PostForm, PostList } from 'containers'

const HomePage = () => {
  return (
    <PageTemplate header={<Header title="Pseudo Chat" />} footer={<Footer />}>
      <PostForm />
    </PageTemplate>
  )
}

export default HomePage
