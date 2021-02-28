import React, { useState, MouseEvent } from 'react'
import Modal from '/src/components/Modal'
import {
  PatentImages,
  ReportImages,
  CopyrightImages
} from '../../../assets/images/index'

interface LicenseCardProps {
  src: string
  onClick?: (event: MouseEvent<HTMLDivElement>) => void
}
const LicenseCard = ({ src, onClick }: LicenseCardProps): JSX.Element => {
  return (
    <div
      className="shadow-lg rounded-sm overflow-hidden cursor-pointer transition ease-out duration-700 transform hover:-translate-y-3"
      onClick={onClick}
    >
      <img src={src} className="w-full" />
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
      <div className="grid grid-cols-6 gap-20 my-10">
        {PatentImages.map((src) => {
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
        {ReportImages.map((src) => {
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
        {CopyrightImages.map((src) => {
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
