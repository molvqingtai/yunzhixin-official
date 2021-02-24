import React, { useEffect } from 'react'
import { Scene } from '@antv/l7'
import { CityLayer } from '@antv/l7-district'
import { GaodeMap, Mapbox } from '@antv/l7-maps'

const CaseMap = (): JSX.Element => {
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [116.2825, 39.9],
        pitch: 0,
        style: 'blank',
        zoom: 3,
        minZoom: 3,
        maxZoom: 10,
        token: 'cfea95fe1c88b60eda40a83b1eb1ceaf'
      })
    })
    scene.on('loaded', () => {
      const cityLayer = new CityLayer(scene, {
        data: [],
        joinBy: ['adcode', 'code'],
        adcode: ['510000', '510100'],
        depth: 3,
        label: {
          field: 'NAME_CHN',
          textAllowOverlap: false
        },
        fill: {
          color: {
            field: 'NAME_CHN',
            values: [
              '#feedde',
              '#fdd0a2',
              '#fdae6b',
              '#fd8d3c',
              '#e6550d',
              '#a63603'
            ]
          }
        },
        popup: {
          enable: true,
          Html: ({ NAME_CHN }: { NAME_CHN: string }) => {
            return `<span>${NAME_CHN}</span>`
          }
        }
      })
      console.log(cityLayer)
    })
  }, [])

  return (
    <div className="relative bg-red-500 flex justify-center">
      <div
        id="map"
        className="absolute"
        style={{ height: '500px', width: '500px' }}
      ></div>
    </div>
  )
}

export default CaseMap
