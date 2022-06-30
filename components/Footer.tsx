import Link from "next/link";

export default function Footer(props: any) {
    return (
        <div
            className="bg-primary py-20 relative"
        >
            <svg width="122" height="128" viewBox="0 0 61 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto mb-10">
                <path d="M17.8092 59.6239H4V4H30.0696V23.3587L17.8092 35.6192V59.6239Z" stroke="white" strokeWidth="7.94212" />
                <path d="M42.3302 4L56.1394 4L56.1394 59.6239L30.0698 59.6239L30.0698 40.2652L42.3302 28.0047L42.3302 4Z" stroke="white" strokeWidth="7.94212" />
            </svg>
            <div
                className="grid text-center sm:w-96 m-auto grid-cols-1 sm:grid-cols-2"
            >
                <div
                    className=""
                >
                    <h1
                        className="text-white text-xl sm:text-xl font-GilroyBold mb-1"
                    >
                        Contact
                    </h1>
                    <a
                        href="mailto:info@natron.io"
                        className="cursor-pointer"
                    >
                        info@natron.io
                    </a>
                    <p>
                        Weissenbühlweg 16 <br />
                        3007 Bern
                    </p>
                </div>
                <div
                    className="mt-5 sm:mt-0"
                >
                    <h1
                        className="text-white text-xl sm:text-xl font-GilroyBold mb-1"
                    >
                        Legal sites
                    </h1>
                    <Link
                        href="/imprint"
                        className="cursor-pointer"
                    >
                        Imprint
                    </Link>
                    <br />
                    <Link
                        href="/privacy-policy"
                        className="cursor-pointer"
                    >
                        Privacy policy
                    </Link>
                </div>
            </div>
        </div>
    )
}