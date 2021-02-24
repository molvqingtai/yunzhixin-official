import React, { useState } from 'react'
import Modal from '/src/components/Modal'

const patentModules = import.meta.globEager('/src/assets/images/patent/*.jpg')
const reportModules = import.meta.globEager('/src/assets/images/report/*.jpg')
const copyrightModules = import.meta.globEager(
  '/src/assets/images/copyright/*.jpg'
)

const LicenseGallery = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(true)
  return (
    <div>
      <div className="grid grid-cols-5 gap-20 my-10">
        {Object.keys(reportModules).map((src) => {
          return (
            <div
              key={src}
              className="shadow-lg rounded-sm overflow-hidden cursor-pointer"
            >
              <img src={src} />
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-6 gap-20 my-10">
        {Object.keys(patentModules).map((src) => {
          return (
            <div key={src} className="shadow-lg rounded-sm overflow-hidden">
              <img src={src} className="w-full" />
            </div>
          )
        })}
      </div>
      <div className="grid grid-cols-10 gap-10 my-10">
        {Object.keys(copyrightModules).map((src) => {
          return (
            <div key={src} className="shadow-lg rounded-sm overflow-hidden">
              <img src={src} />
            </div>
          )
        })}
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <h1>modal</h1>
      </Modal>
    </div>
  )
}

export default LicenseGallery