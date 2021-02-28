import React, { useRef, useState } from 'react'
import Navigation from './components/Navigation'
import FloorView from './components/FloorView'
import DefectSwiper from './components/DefectSwiper'
import FeatureSwiper from './components/FeatureSwiper'
import ServiceCards from './components/ServiceCards'
// import CaseMap from './components/CaseMap'
import LicenseGallery from './components/LicenseGallery'

import { ReactComponent as FeatureSvg } from '/src/assets/images/feature.svg'
import { ReactComponent as AdvantageSvg } from '/src/assets/images/advantage.svg'

// import useDebounce from '/src/hooks/useDebounce'

const Index = (): JSX.Element => {
  const floorViewRefs = useRef<{ [key: string]: HTMLDivElement }>({})
  const [menuActiveIndex, setMenuActiveIndex] = useState(0)

  const handleToggleActiveIndex = (id: number): void => {
    setMenuActiveIndex(id)
    floorViewRefs.current[id]?.scrollIntoView?.({
      // behavior: 'smooth'
    })
  }

  const handleInViewport = (id: number): void => {
    console.log('id', id)
    setMenuActiveIndex(id)
  }

  // const handleInViewport = useDebounce((id: number): void => {
  //   console.log('id', id)
  //   setMenuActiveIndex(id)
  // }, 500)

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Navigation
        activeIndex={menuActiveIndex}
        menus={['我们的产品', '特色功能', '解决方案', '客户案例', '关于我们']}
        onToggle={handleToggleActiveIndex}
      ></Navigation>
      <FloorView
        ref={(element: HTMLDivElement) => (floorViewRefs.current[0] = element)}
        onInViewport={() => handleInViewport(0)}
        image="/src/assets/images/01.jpg"
      ></FloorView>

      <FloorView image="/src/assets/images/02.jpg" className="flex">
        <div className="flex flex-col justify-center items-center text-white m-auto">
          <div className="w-full max-w-3xl flex justify-between mb-12 items-center text-4xl">
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

      <FloorView color="#7F1D1D" className="flex">
        <div className="w-full flex flex-col items-center justify-around py-20">
          <div className="mb-10">
            <h1 className="text-white text-4xl">
              餐厨垃圾现有处理方式存在 <strong className="text-5xl">6</strong>
              大缺陷
            </h1>
          </div>
          <DefectSwiper></DefectSwiper>
          <div className="w-full flex">
            <div className="flex items-center justify-center flex-1">
              <img className="w-full" src="/src/assets/images/file.png" />
            </div>
            <div className="text-white flex-1 flex justify-center items-center">
              <div className="flex flex-col items-baseline">
                <div className="leading-9 mb-4">
                  <h1 className="text-3xl mb-6">政府目标</h1>
                  <p>执行生活垃圾分类制度，实现城市金细化管理</p>
                  <p>厨余垃圾分布式处理，就地处置，禁止转运</p>
                  <p>2020~2022 三年按规划完善 5+2 城区的餐厨垃圾处置设配</p>
                </div>
                <div className="flex flex-col items-baseline"></div>
                <a
                  href="#"
                  className="px-2 py-1 bg-white text-red-900 rounded-md mb-3 hover:underline"
                >
                  《成都市生活垃圾管理规范》
                </a>
                <a
                  href="#"
                  className="px-2 py-1 bg-white text-red-900 rounded-md hover:underline"
                >
                  《成都市厨余垃圾分布式处理工作方案》
                </a>
              </div>
            </div>
          </div>
        </div>
      </FloorView>
      <FloorView className="flex">
        <div className="flex flex-col justify-center items-center py-20">
          <div className="max-w-3xl w-full flex justify-between items-center text-4xl mb-20">
            <h1 className="text-gray-600">科学选址</h1>
            <span className="h-8 w-1 bg-gray-600"></span>
            <h1 className="text-gray-600">就地处置</h1>
            <span className="h-8 w-1 bg-gray-600"></span>
            <h1 className="text-gray-600">分布设点</h1>
            <span className="h-8 w-1 bg-gray-600"></span>
            <h1 className="text-gray-600">一体服务</h1>
          </div>
          <div className="flex">
            <div className="flex-1 flex items-center justify-center">
              <img className="w-full" src="/src/assets/images/product-01.png" />
            </div>
            <div className="flex-1 flex items-center justify-center">
              <FeatureSwiper></FeatureSwiper>
            </div>
          </div>
        </div>
      </FloorView>
      <FloorView
        ref={(element: HTMLDivElement) => (floorViewRefs.current[1] = element)}
        onInViewport={() => handleInViewport(1)}
        className="flex flex-col items-center justify-center py-20"
      >
        <div className="text-4xl text-gray-600 mb-12">
          <h1>特色功能</h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <FeatureSvg className="w-full"></FeatureSvg>
        </div>
      </FloorView>
      <FloorView
        onInViewport={() => handleInViewport(2)}
        ref={(element: HTMLDivElement) => (floorViewRefs.current[2] = element)}
        className="flex flex-col justify-center items-center py-20"
        color="#F1F2F6"
      >
        <div className="text-4xl text-gray-600 mb-20">
          <h1>分布式、全流程、一体化解决方案</h1>
        </div>
        <ServiceCards></ServiceCards>
      </FloorView>
      <FloorView className="flex flex-col justify-center items-center py-20">
        <div className="text-4xl text-gray-600 mb-20">
          <h1>方案优势</h1>
        </div>
        <div className="flex">
          <div className="flex-1 w-full flex items-center justify-center">
            <AdvantageSvg className="w-full"></AdvantageSvg>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <h1 className="text-3xl  leading-relaxed text-gray-500 mb-10 w-9/12">
              在垃圾分类中，厨余垃圾是污染最重、最不好分类和处置的。
            </h1>
            <h1 className="text-3xl leading-relaxed text-gray-500 w-9/12">
              解决好厨余垃圾的分类和处置，就抓住了生活垃圾分类和处置工作的关键。
            </h1>
          </div>
        </div>
      </FloorView>
      <FloorView
        onInViewport={() => handleInViewport(3)}
        ref={(element: HTMLDivElement) => (floorViewRefs.current[3] = element)}
        className="flex flex-col justify-center items-center py-20"
      >
        <div className="text-4xl text-gray-600 mb-12">
          <h1>案例展示</h1>
        </div>
        <div className="flex items-center">
          <div className="flex-1 flex flex-col items-center h-64 mx-4 rounded-md shadow-lg overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <img
                className="h-full object-cover w-full"
                src="/src/assets/images/case/case-01.jpg"
                alt=""
              />
            </div>

            <h4 className="my-4 text-gray-700">金堂恒大御景半岛</h4>
          </div>
          <div className="flex-1 flex flex-col items-center h-64 mx-4 rounded-md shadow-lg overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <img
                className="h-full object-cover w-full"
                src="/src/assets/images/case/case-02.jpg"
                alt=""
              />
            </div>
            <h4 className="my-4 text-gray-700">双流区电子信息职业学校</h4>
          </div>

          <div className="flex-1 flex flex-col items-center h-64 mx-4 rounded-md shadow-lg overflow-hidden">
            <div className="flex-1 overflow-hidden">
              <img
                className="h-full object-cover w-full"
                src="/src/assets/images/case/case-03.jpg"
                alt=""
              />
            </div>
            <h4 className="my-4 text-gray-700">郫都区农科村</h4>
          </div>
        </div>
      </FloorView>
      <FloorView color="#F1F2F6">
        <LicenseGallery></LicenseGallery>
      </FloorView>
      <FloorView
        onInViewport={() => handleInViewport(4)}
        ref={(element: HTMLDivElement) => (floorViewRefs.current[4] = element)}
        image="/src/assets/images/03.jpg"
        className="flex justify-center items-center"
      >
        <img
          className="w-10/12"
          src="/src/assets/images/logo-02.png"
          alt="logo"
        />
      </FloorView>
    </div>
  )
}

export default Index
