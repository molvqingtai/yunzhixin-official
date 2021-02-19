import React from 'react'
import Layout from '../../components/Layout/Index'
import Navigation from './components/Navigation'
import FloorView from './components/FloorView'

import BannerImage1 from '../../assets/images/01.jpg'
import BannerImage2 from '../../assets/images/02.jpg'

const Index = (): JSX.Element => {
  return (
    <Layout>
      <Navigation menus={['我们的产品', '客户案例', '关于我们']}></Navigation>
      <FloorView image={BannerImage1}></FloorView>
      <FloorView
        image={BannerImage2}
        className="flex justify-center items-center"
      >
        <div className="max-w-3xl text-white">
          <div className="flex justify-between mb-12 items-center text-4xl">
            <h1>成都制造</h1>
            <span className="h-8 w-1 bg-white"></span>
            <h1>专利产权</h1>
            <span className="h-8 w-1 bg-white"></span>
            <h1>高端服务</h1>
            <span className="h-8 w-1 bg-white"></span>
            <h1>性价比高</h1>
          </div>
          <div>
            <p className="my-4">
              中国，作为世界第一人口大国，伴随着时代发展和经济进步，全国城镇人口已高达
              8.3 亿。 在餐饮行业高速发展的同时，2019 年全国餐厨垃圾生产量已突破
              1.2 亿吨，其中，成都市每天产生餐厨垃圾 6000 亿吨。
            </p>
            <p className="my-4">
              中国，作为世界第一人口大国，伴随着时代发展和经济进步，全国城镇人口已高达
              8.3 亿。 在餐饮行业高速发展的同时，2019 年全国餐厨垃圾生产量已突破
              1.2 亿吨，其中，成都市每天产生餐厨垃圾 6000 亿吨。
            </p>
            <p className="my-4">
              中国，作为世界第一人口大国，伴随着时代发展和经济进步，全国城镇人口已高达
              8.3 亿。 在餐饮行业高速发展的同时，2019 年全国餐厨垃圾生产量已突破
              1.2 亿吨，其中，成都市每天产生餐厨垃圾 6000 亿吨。
            </p>
            <p className="my-4">
              中国，作为世界第一人口大国，伴随着时代发展和经济进步，全国城镇人口已高达
              8.3 亿。 在餐饮行业高速发展的同时，2019 年全国餐厨垃圾生产量已突破
              1.2 亿吨，其中，成都市每天产生餐厨垃圾 6000 亿吨。
            </p>
          </div>
        </div>
      </FloorView>
      <FloorView className="flex flex-col">
        <div className="flex flex-col flex-1 items-center justify-center bg-gray-200">
          <div>
            <h1 className="text-gray-700 text-4xl">
              餐厨垃圾现有处理方式存在 <strong className="text-5xl">6</strong>{' '}
              大缺陷
            </h1>
          </div>
          <div className="shadow-md max-w-3xl flex-1"></div>
        </div>
      </FloorView>
    </Layout>
  )
}

export default Index
