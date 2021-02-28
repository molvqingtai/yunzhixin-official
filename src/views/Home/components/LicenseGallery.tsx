import React, { useState, MouseEvent } from 'react'
import Modal from '/src/components/Modal'

const patentModules = import.meta.globEager('/src/assets/images/patent/*.jpg')
const reportModules = import.meta.globEager('/src/assets/images/report/*.jpg')
const copyrightModules = import.meta.globEager(
  '/src/assets/images/copyright/*.jpg'
)

interface LicenseCardProps {
  src: string
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}
const LicenseCard = ({ src, onClick }: LicenseCardProps): JSX.Element => {
  return (
    <div
      className="shadow-lg rounded-sm overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <img src={src} />
    </div>
  )
}

const LicenseGallery = (): JSX.Element => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')
  const handleModalClose = (): void => setModalOpen(false)
  const handleLicenseCardClick = (src: string): void => {
    setModalImage(src)
    setModalOpen(true)
  }

  return (
    <div>
      <div className="grid grid-cols-5 gap-20 my-10">
        {Object.keys(reportModules).map((src) => {
          return (
            <LicenseCard
              key={src}
              src={src}
              onClick={() => handleLicenseCardClick(src)}
            ></LicenseCard>
          )
        })}
      </div>
      <div className="grid grid-cols-6 gap-20 my-10">
        {Object.keys(patentModules).map((src) => {
          return (
            <LicenseCard
              key={src}
              src={src}
              onClick={() => handleLicenseCardClick(src)}
            ></LicenseCard>
          )
        })}
      </div>
      <div className="grid grid-cols-10 gap-10 my-10">
        {Object.keys(copyrightModules).map((src) => {
          return (
            <LicenseCard
              key={src}
              src={src}
              onClick={() => handleLicenseCardClick(src)}
            ></LicenseCard>
          )
        })}
      </div>
      <Modal open={modalOpen} onClose={handleModalClose}>
        <div>
          <img src={modalImage} />
        </div>
      </Modal>
    </div>
  )
}

export default LicenseGallery
