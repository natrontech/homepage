import type { NextPage } from 'next'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import Button, { ButtonType } from '../components/general/Button'
import Herosection from '../components/landingpage/Herosection'
import Offering from '../components/landingpage/offering/Offering'

const Home: NextPage = () => {
  return (
    <div
      className=""
    >
      <div
        className="sm:px-20 px-2"
      >
        <Herosection />
      </div>
      <div
        className='sm:px-20 px-2'
      >
        <Offering />
      </div>
    </div>
  )
}

export default Home
