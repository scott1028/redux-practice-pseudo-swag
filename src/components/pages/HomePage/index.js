// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

import { PageTemplate, Header, Hero, Footer, FeatureList } from 'components'
import { PostForm, PostList } from 'containers'

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <PostForm />
      {/* <PostList limit={15} /> */}
    </PageTemplate>
  )
  // return (
  //   <PageTemplate
  //     header={<Header />}
  //     hero={<Hero />}
  //     footer={<Footer />}
  //   >
  //     <FeatureList />
  //   </PageTemplate>
  // )
}

export default HomePage
