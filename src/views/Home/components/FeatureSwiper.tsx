import React from 'react'
import SwiperCore, { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'

SwiperCore.use([Autoplay])

const FeatureSwiper = (): JSX.Element => {
  const featureList = [
    {
      title: '自动数据系统',
      desc: [
        '包括自动提升、自动称重、自动传输、自动识别等装置',
        '提升机适用 100L、120L 标准垃圾桶，操作简单'
      ]
    },
    {
      title: '杂物分选系统',
      desc: ['用于分选垃圾中的非有机物品', '如塑料、铁制品、请博物等']
    },
    {
      title: '固液分离系统',
      desc: ['可实现废弃物固液分离', '降盐降脂、自动分拣和破碎']
    },
    {
      title: '杀菌发酵系统',
      desc: [
        '取代常温常压下的菌粉发酵杀菌',
        '处理过程不产生异味、保证有机物料不结焦、不碳化，可作为生态有机肥'
      ]
    },
    {
      title: '热能回收系统',
      desc: [
        '利用余热回收的节能技术',
        '能耗较行业通用的电加热方式降低 70%，达到节能减排的环保要求'
      ]
    },
    {
      title: '油水分离系统',
      desc: [
        '配套全自动油水分离设备',
        '有除渣装置、自动提油装置、液位传感器，分离后的厨余废弃物含水率降至 70% 左右'
      ]
    },
    {
      title: '污水处理系统',
      desc: [
        '各类污水经生物发酵，达三级污水排放标准',
        '直排市政污水管网溢流管保障设备安全，污水不外泄'
      ]
    },
    {
      title: '清洁去味系统',
      desc: [
        '设备内部呈全部密闭状态，产生的气体通过 UV 杀菌冷凝技术处理',
        '同时采用高压冲洗，有效保证投料斗、分选装置内部清洁、无异味'
      ]
    },
    {
      title: '智能网控系统',
      desc: [
        'PLC 控制系统、物联网模块',
        '利用智能控制和物联网系统的实时连接，可对所有设备进行数据采集'
      ]
    }
  ]
  return (
    <div className="w-4/5 h-80 relative flex justify-center items-center">
      <div
        className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center"
        style={{
          backgroundImage: 'linear-gradient(#FFFFFF 5%,transparent,#FFFFFF 95%)'
        }}
      ></div>
      <div className="shadow-lg w-full h-28 absolute rounded-xl bg-theme bg-opacity-20"></div>
      <Swiper
        className="w-full h-full"
        direction={'vertical'}
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          disableOnInteraction: false
        }}
        loop={true}
      >
        {featureList.map(({ title, desc }, index) => (
          <SwiperSlide key={index}>
            <div className="px-4">
              <h1 className="text-2xl text-gray-800">{title}</h1>
              <p className="text-gray-500 text-base truncate">{desc[0]}</p>
              <p className="text-gray-500 text-base truncate">{desc[1]}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default FeatureSwiper
