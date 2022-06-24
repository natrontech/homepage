import { useRouter } from "next/router"
import { classNames } from "../lib/design";


export default function Navigation(props: any) {
    const router = useRouter();

    const navigation = [
        {
            name: "Services",
            link: "/services",
            current: router.pathname === "/services"
        },
        {
            name: "About us",
            link: "/about",
            current: router.pathname === "/about"
        }
    ]

    return (
        <div
            className="relative h-screen"
        >
            <div
                className="text-center sm:text-left absolute top-1/2 left-1/2 sm:left-20 sm:-translate-x-0 w-full -translate-x-1/2 -translate-y-1/2"
            >
                {
                    navigation.map((item: any, index: number) => {
                        return (
                            <div key={index}>
                                <span
                                    className={classNames(
                                        item.current ? "inlined-text text-white" : "outlined-text text-primary",
                                        "font-bold text-6xl sm:text-9xl cursor-pointer sm:tracking-wider tracking-widest sm:hover:text-white active:hover:text-white transition-all duration-150 sm:duration-300 ease-in-out"
                                    )}
                                >
                                    {item.name}
                                </span>
                            </div>
                        )
                    })
                }
                <div
                    className="relative"
                >

                </div>

            </div>
        </div>
    )
}