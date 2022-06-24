import type { NextPage } from 'next'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import Herosection from '../components/landingpage/Herosection'

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
    </div>
  )
}

export default Home
