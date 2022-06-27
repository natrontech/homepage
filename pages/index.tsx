import type { NextPage } from 'next'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import Button, { ButtonType } from '../components/general/Button'
import Herosection from '../components/landingpage/Herosection'
import Services from '../components/landingpage/services/Services'

const Home: NextPage = () => {
  return (
    <div
      className=""
    >
      <div
        className="sm:px-20 px-4"
      >
        <Herosection />
      </div>
      <div
        className='sm:px-20 px-4'
      >
        <Services />
      </div>
    </div>
  )
}

export default Home
