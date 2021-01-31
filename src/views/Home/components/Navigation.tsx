import React, { FC } from 'react'

const Navigation: FC = () => {
  return (
    <div className=" bg-black bg-opacity-5 text-white h-12 sticky top-0">
      <div className="container mx-auto h-full flex items-center">
        <div>云之信</div>
        <div className="flex flex-1 justify-around">
          <div>产品</div>
          <div>案例</div>
          <div>云之信</div>
          <div>云之信</div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
