import type { NextPage } from 'next'
import ExportedImage from 'next-image-export-optimizer'
import Link from 'next/link'
import Footer from '../components/Footer'
import Button, { ButtonType } from '../components/general/Button'
import About from '../components/landingpage/about/About'
import Attention from '../components/landingpage/Attention'
import Herosection from '../components/landingpage/Herosection'
import References from '../components/landingpage/references/References'
import Services from '../components/landingpage/services/Services'
import Technologies from '../components/landingpage/technologies/Technologies'

// const Home: NextPage = () => {
//   return (
//     <div
//       className="scrollbar-hide"
//     >
//       <div
//         className="sm:px-20 px-4"
//       >
//         <Herosection />
//       </div>
//       <div
//         className='sm:px-20 px-4'
//       >
//         <Services />
//       </div>
//       <div
//         className='sm:px-20 px-4'
//       >
//         <About />
//       </div>
//       <div
//         className='sm:px-20 px-4'
//       >
//         <References />
//       </div>
//       <div
//         className='bg-primary'
//       >
//         <Attention />
//       </div>
//       <div
//         className='sm:px-20 px-4'
//       >
//         <Technologies />
//       </div>
//     </div>
//   )
// }

const Home: NextPage = () => {
  return (
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        className="relative sm:w-72 w-56 h-44"
      >
        <ExportedImage
          src="/images/logo/logo-typo.png"
          alt="Natron Logo"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <br />
      <div>
        <p className="text-center font-GilroyMedium text-2xl text-gray-200 animate-pulse">
           Launching soon...
        </p>
        <p className="text-center text-gray-300">
          Stay tuned for more information.
        </p>
      </div>
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://github.com/natrongmbh"
          className="text-gray-200 hover:text-gray-300"
          target="_blank"
          rel="noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Home
