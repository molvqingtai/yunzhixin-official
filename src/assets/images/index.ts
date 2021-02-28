import { ReactComponent as Logo } from './svg/logo.svg'
import { ReactComponent as AdvantageSvg } from './svg/advantage.svg'
import { ReactComponent as FeatureSvg } from './svg/feature.svg'
import Logo2 from './logo/logo-02.png'
import BanIcon from './icon/ban-icon.png'
import FileIcon from './icon/file-icon.png'
import Product1 from './product/product-01.png'
import Floor1 from './floor/01.jpg'
import Floor2 from './floor/02.jpg'
import Floor3 from './floor/03.jpg'

const caseModules = import.meta.globEager('./case/*.jpg')
const patentModules = import.meta.globEager('./patent/*.jpg')
const reportModules = import.meta.globEager('./report/*.jpg')
const copyrightModules = import.meta.globEager('./copyright/*.jpg')

const CaseImages = Object.values(caseModules).map((Module) => Module.default)
const PatentImages = Object.values(patentModules).map(
  (Module) => Module.default
)
const ReportImages = Object.values(reportModules).map(
  (Module) => Module.default
)
const CopyrightImages = Object.values(copyrightModules).map(
  (Module) => Module.default
)

export {
  Logo,
  Logo2,
  AdvantageSvg,
  FeatureSvg,
  BanIcon,
  FileIcon,
  Product1,
  Floor1,
  Floor2,
  Floor3,
  CaseImages,
  PatentImages,
  ReportImages,
  CopyrightImages
}
