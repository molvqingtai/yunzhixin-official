import React, { useEffect } from 'react'
import { Scene } from '@antv/l7'
// import { CityLayer } from '@antv/l7-district'
// import { GaodeMap, Mapbox } from '@antv/l7-maps'

const CaseMap = (): JSX.Element => {
  useEffect(() => {
    // void (async (): Promise<void> => {
    //   try {
    //     const response = await fetch(
    //       'https://gw.alipayobjects.com/os/bmw-prod/149b599d-21ef-4c24-812c-20deaee90e20.json'
    //     )
    //     console.log(response)
    //   } catch (error) {
    //     console.log(error)
    //   }
    //   const provinceData = await response.json()
    //   const data = Object.keys(provinceData).map((key: string) => {
    //     return {
    //       code: key,
    //       name: provinceData[key][0],
    //       pop: provinceData[key][2] * 1
    //     }
    //   })
    // })()
    // const scene = new Scene({
    //   id: 'map',
    //   map: new Mapbox({
    //     center: [116.2825, 39.9],
    //     pitch: 0,
    //     style: 'blank',
    //     zoom: 3,
    //     minZoom: 3,
    //     maxZoom: 10
    //   })
    // })
    // console.log(scene)
  }, [])

  return <div id="map">case</div>
}

export default CaseMap
