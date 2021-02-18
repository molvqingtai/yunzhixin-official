import React from 'react'
import Layout from '../../components/Layout/Index'
import Navigation from './components/Navigation'
import Banner from './components/Banner'

import BannerImage1 from '../../assets/images/01.jpg'
import BannerImage2 from '../../assets/images/02.jpg'

const Index = (): JSX.Element => {
  return (
    <Layout>
      <Navigation menus={['我们的产品', '客户案例', '关于我们']}></Navigation>
      <Banner src={BannerImage1}></Banner>
      <Banner src={BannerImage2}>
        <div>
          <h1>成都制造</h1>
          <h1>成都制造</h1>
          <h1>成都制造</h1>
          <h1>成都制造</h1>
        </div>
      </Banner>
    </Layout>
  )
}

export default Index
