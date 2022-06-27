import { Twirl as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { classNames } from '../lib/design'
import Navigation from './Navigation'

export default function Navbar(props: any) {
    const [isOpen, setOpen] = useState(false)
    const router = useRouter();

    const handleLogoClick = () => {
        setOpen(false);
        router.push('/#hero');
    } 

    return (
        <div>
            <div
                className={classNames(
                    isOpen ? 'z-50 opacity-100 scale-100' : 'opacity-0 scale-95 -z-50 -translate-x-52',
                    'fixed top-5 left-5 transition-all duration-500 ease-in-out',
                )}
            >
                <button
                    onClick={handleLogoClick}
                    className="cursor-pointer animate-wiggle"
                >
                    <svg width="61" height="64" viewBox="0 0 61 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.8092 59.6239H4V4H30.0696V23.3587L17.8092 35.6192V59.6239Z" stroke="white" strokeWidth="7.94212" />
                        <path d="M42.3302 4L56.1394 4L56.1394 59.6239L30.0698 59.6239L30.0698 40.2652L42.3302 28.0047L42.3302 4Z" stroke="white" strokeWidth="7.94212" />
                    </svg>
                </button>
            </div>
            <div
                className='fixed right-7 top-7 z-20'
            >
                <Hamburger
                    toggled={isOpen}
                    toggle={setOpen}
                    direction="right"
                />
            </div>
            <div
                className={classNames(
                    isOpen ? 'fixed top-0 left-0 w-full h-screen z-10 opacity-100 scale-100' : 'opacity-0 scale-95 -translate-x-full -z-50',
                    "bg-primary h-screen w-full z-10 fixed overflow-hidden transition-all duration-200 ease-in-out"
                )}
            >
                <Navigation setOpen={setOpen} />
            </div>
        </div>
    )
}