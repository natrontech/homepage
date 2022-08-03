import Link from "next/link";
import { useRouter } from "next/router"
import { classNames } from "../lib/design";

export default function Navigation(props: any) {
    const router = useRouter();

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
        },
        {
            name: "Techonolgies",
            link: "/#technologies",
            current: router.asPath === "/#technologies"
        }
    ]

    return (
        <div
            className="relative h-screen"
        >
            <div
                className="text-center space-y-10 lg:text-left absolute top-1/2 left-1/2 lg:left-20 lg:-translate-x-0 w-full -translate-x-1/2 -translate-y-1/2"
            >
                {
                    navigation.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <span
                                    className={classNames(
                                        item.current ? "inlined-text text-white" : "outlined-text text-primary",
                                        "font-GilroyBold text-4b5 lg:text-xxl md:text-5xl cursor-pointer lg:tracking-wider tracking-widest lg:hover:text-white active:hover:text-white transition-all duration-150 sm:duration-300 ease-in-out"
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
                className="absolute grid w-full lg:w-auto grid-cols-2 lg:grid-cols-1 lg:bottom-20 lg:right-20 bottom-5"
            >
                <div
                    className="lg:mb-10 mx-5 lg:mx-0"
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
                    className="mx-5 lg:mx-0"
                >
                    <h1
                        className="text-white text-xl sm:text-xl font-GilroyBold mb-1"
                    >
                        Legal sites
                    </h1>
                    <span
                        className="cursor-pointer"
                        onClick={() => {
                            router.push("/imprint#imprint")
                            props.setOpen(false)
                        }}
                    >
                        Imprint
                    </span>
                </div>
            </div>
        </div>
    )
}