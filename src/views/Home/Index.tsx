import React, { FC } from 'react'

import Layout from '../../components/Layout/Index'
import Navigation from './components/Navigation'
import BannerImage1 from '../../assets/images/banner-01.png'

interface BannerProps {
  src: string
  children?: JSX.Element | JSX.Element[]
}

const Banner: FC<BannerProps> = ({ src, children }: BannerProps) => {
  return (
    <div
      className="w-screen h-screen bg-cover"
      style={{ backgroundImage: `url(${src})` }}
    >
      {children}
    </div>
  )
}

const Index: FC = () => {
  return (
    <Layout>
      <Navigation menu={['产品', '案例', '关于我们']}></Navigation>
      <Banner src={BannerImage1}></Banner>
    </Layout>
  )
}

export default Index
