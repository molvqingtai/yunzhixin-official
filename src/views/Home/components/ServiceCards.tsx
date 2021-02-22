import React from 'react'

interface CardProps {
  title: string
  color: string
  desc: string
  index: number
}
const Card = ({ title, color, desc, index }: CardProps): JSX.Element => (
  <div className="flex-1 relative rounded-2xl shadow-xl px-4 pt-20 pb-4 mx-2">
    <div
      className="flex justify-around text-white z-10 text-center py-2 rounded-r-3xl absolute left-0 top-6 px-3"
      style={{ backgroundColor: color }}
    >
      <span
        className="text-xs flex items-center justify-center text-center text-gray-800 rounded-full bg-white w-6 h-6"
        style={{ color }}
      >
        0{index + 1}
      </span>
      <h1 className="ml-2">{title}</h1>
    </div>
    <div>
      <p className="text-xs text-gray-500" style={{ textIndent: '2em' }}>
        {desc}
      </p>
    </div>
  </div>
)

const ServiceCards = (): JSX.Element => {
  const cardList = [
    {
      title: '源头分类',
      color: '#2F683C',
      desc:
        '对厨余垃圾从源头开始进行分类。厨余垃圾来源包括居民家庭、餐饮商户、各类食堂、酒店等。针对不同的来源，采用不同的分类机制和处置办法。'
    },
    {
      title: '分散布点',
      color: '#438B49',
      desc:
        '项目采用“分散布点、就近处置”的模式，全程无堆积、无转运、无长途运输、无二次污染。解决常规处理方式“处理链过长、二次污染严重、效率低成本高”等问题。'
    },
    {
      title: '就近处置',
      color: '#A9C243',
      desc:
        '收集、运输、处理 2 吨厨余垃圾只需 1~2 小时，投入小、人员少、流程简单。'
    },
    {
      title: '一体服务',
      color: '#93BA69',
      desc:
        '设计制造、安装调试、培训售后、专用设施、专用软件等服务全部由一加公司提供，实现服务一体化、分类处置一体化、软硬件一体化、管理经营一体化。不转包、不外包。'
    },
    {
      title: '硬件支撑',
      color: '#51ABB3',
      desc: '研发拥有自主知识产权的处置设备为项目提供支撑。'
    },
    {
      title: '软件配合',
      color: '#4AA1CE',
      desc:
        '针对性开发多数软件和数据平台，将垃圾分类和处置与互联网、大数据技术进行结合，解决只能化和数据化难题。'
    },
    {
      title: '智能运行',
      color: '#3372AD',
      desc:
        '集成度高、自动化程度高、寿命长、能耗低、噪音小，融入物联网、大数据等智能互联功能。处置车间环境整洁无异味，排放符合国家相应标准。'
    },
    {
      title: '公司运营',
      color: '#2E659B',
      desc: '为项目量身打造实体公司，负责运营创收等工作。'
    }
  ]
  return (
    <div className="flex justify-center w-full">
      {cardList.map((item, index) => (
        <Card key={index} index={index} {...item}></Card>
      ))}
    </div>
  )
}

export default ServiceCards
