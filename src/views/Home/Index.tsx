import React, { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import FloorView from './components/FloorView'
import DefectSwiper from './components/DefectSwiper'
import FeatureSwiper from './components/FeatureSwiper'
import ServiceCards from './components/ServiceCards'
import CaseMap from './components/CaseMap'
import FloorImage1 from '../../assets/images/01.jpg'
import FloorImage2 from '../../assets/images/02.jpg'
import FloorImage3 from '../../assets/images/03.jpg'
import FileImage from '../../assets/images/file.png'
import Product1 from '../../assets/images/product-01.png'
import Logo2 from '../../assets/images/logo-02.png'

import { ReactComponent as FeatureSvg } from '../../assets/images/feature.svg'
import { ReactComponent as AdvantageSvg } from '../../assets/images/advantage.svg'

import useImport from '../../hooks/useImport'

const Index = (): JSX.Element => {
  const patentImages = useImport(
    [...Array(6)].map(
      (_, index) => `../../assets/images/patent/patent-0${index + 1}.jpg`
    )
  )
  console.log(patentImages)

  useEffect(() => {
    Promise.all(
      [...Array(6)].map(async (_, index) => {
        const Module = await import(
          `../../assets/images/patent/patent-0${index}.jpg`
        )
        console.log(Module)

        return Module.default
      })
    )
      .then((res) => setPatentImages(res))
      .catch((err) => {
        console.log(err.message)
      })
  }, [])

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Navigation menus={['我们的产品', '客户案例', '关于我们']}></Navigation>
      <FloorView image={FloorImage1}></FloorView>
      <FloorView
        image={FloorImage2}
        className="flex justify-center items-center"
      >
        <div className="max-w-3xl w-full text-white">
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
      <FloorView className="flex flex-col bg-red-900">
        <div className="flex flex-col flex-1 items-center justify-around pt-12">
          <div className="mb-10">
            <h1 className="text-white text-4xl">
              餐厨垃圾现有处理方式存在 <strong className="text-5xl">6</strong>
              大缺陷
            </h1>
          </div>
          <DefectSwiper></DefectSwiper>
        </div>
        <div className="w-full flex-1 flex">
          <div className="flex-1 flex items-center justify-end">
            <img className="w-8/12" src={FileImage} />
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
      </FloorView>
      <FloorView className="flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full flex justify-between items-center text-4xl mb-20">
          <h1 className="text-gray-600">成都制造</h1>
          <span className="h-8 w-1 bg-gray-600"></span>
          <h1 className="text-gray-600">专利产权</h1>
          <span className="h-8 w-1 bg-gray-600"></span>
          <h1 className="text-gray-600">高端服务</h1>
          <span className="h-8 w-1 bg-gray-600"></span>
          <h1 className="text-gray-600">性价比高</h1>
        </div>
        <div className="flex">
          <div className="flex-1 flex items-center justify-center">
            <img className="w-10/12" src={Product1} />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <FeatureSwiper></FeatureSwiper>
          </div>
        </div>
      </FloorView>
      <FloorView className="flex flex-col items-center justify-center">
        <div className="text-4xl text-gray-600 mb-12">
          <h1>特色功能</h1>
        </div>
        <div className="w-full flex items-center justify-center">
          <FeatureSvg className="max-w-6xl w-full"></FeatureSvg>
        </div>
      </FloorView>
      <FloorView className="flex flex-col justify-center items-center bg-theme bg-opacity-10">
        <div className="text-4xl text-gray-600 mb-12">
          <h1>分布式、全流程、一体化解决方案</h1>
        </div>
        <ServiceCards></ServiceCards>
      </FloorView>
      <FloorView className="flex flex-col items-center justify-center">
        <div className="text-4xl text-gray-600 mb-12">
          <h1>方案优势</h1>
        </div>
        <div className="flex">
          <div className="flex-1 w-full flex items-center justify-center">
            <AdvantageSvg className="w-8/12"></AdvantageSvg>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <h1 className="text-3xl w-7/12 leading-relaxed">
              在垃圾分类中，厨余垃圾是污染最重、最不好分类和处置的。解决好厨余垃圾的分类和处置，就抓住了生活垃圾分类和处置工作的关键。
            </h1>
          </div>
        </div>
      </FloorView>
      <FloorView className="flex flex-col items-center justify-center">
        <div className="text-4xl text-gray-600 mb-12">
          <h1>案例展示</h1>
        </div>
        <CaseMap></CaseMap>
      </FloorView>
      <FloorView>
        <div className="grid grid-cols-6 gap-4">
          <img src={patentImages[0]} alt="" />
        </div>
      </FloorView>
      <FloorView
        image={FloorImage3}
        className="flex justify-center items-center"
      >
        <img className="w-10/12" src={Logo2} alt="logo" />
      </FloorView>
    </div>
  )
}

export default Index
