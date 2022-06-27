import Link from "next/link";
import { useRouter } from "next/router"
import { classNames } from "../lib/design";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Navigation(props: any) {
    const router = useRouter();

    console.log(router.asPath);

    const navigation = [
        {
            name: "Services",
            link: "/#services",
            current: router.asPath === "/#services"
        },
        {
            name: "About us",
            link: "/#about",
            current: router.asPath === "/#about"
        },
        {
            name: "References",
            link: "/#references",
            current: router.asPath === "/#references"
        }
    ]

    return (
        <div
            className="relative h-screen"
        >
            <div
                className="text-center space-y-10 sm:text-left absolute top-1/2 left-1/2 sm:left-20 sm:-translate-x-0 w-full -translate-x-1/2 -translate-y-1/2"
            >
                {
                    navigation.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <span
                                    className={classNames(
                                        item.current ? "inlined-text text-white" : "outlined-text text-primary",
                                        "font-bold text-5xl sm:text-xxl cursor-pointer sm:tracking-wider tracking-widest sm:hover:text-white active:hover:text-white transition-all duration-150 sm:duration-300 ease-in-out"
                                    )}
                                    onClick={() => {
                                        router.push(item.link)
                                        props.setOpen(false)
                                    }}
                                >
                                    {item.name}
                                </span>
                            </div>
                        )
                    })
                }

            </div>
            <div
                className="absolute grid w-full sm:w-auto grid-cols-2 sm:grid-cols-1 sm:bottom-20 sm:right-20 bottom-5"
            >
                <div
                    className="sm:mb-10 mx-5 sm:mx-0"
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
                </div>
                <div
                    className="mx-5 sm:mx-0"
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