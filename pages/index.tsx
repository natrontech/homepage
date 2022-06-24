import type { NextPage } from 'next'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import Herosection from '../components/landingpage/Herosection'

const Home: NextPage = () => {
  return (
    <div
      className="pt-20"
    >
      <div
        className="px-20"
      >
        <Herosection />
      </div>
    </div>
  )
}

export default Home
