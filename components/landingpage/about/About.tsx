import { classNames } from "../../../lib/design";
import History from "./History";
import MateCard from "./MateCard";

export default function About() {
    const mates = [
        {
            image: "/images/mates/janlauber.jpeg",
            name: "Jan Lauber",
            position: "Founder",
            email: "jan.lauber@natron.io",
            nickname: "THE FULLSTACK EVERYTHING",
            github: "janlauber",
        },
    ]
    return (
        <div
            id="about"
            className="pt-20"
        >
            <h1
                className="lg:text-xxl sm:text-8xl text-5xl font-GilroyBold text-center mb-2"
            >
                We <span className="text-primary">rise</span> by lifting <span className="text-primary">others</span>
            </h1>
            <p
                className="text-lg mb-20 text-center text-gray-300"
            >
                #risewithus
            </p>
            <div
                className={classNames(
                    mates.length == 2 ? "sm:grid-cols-2" : "lg:grid-cols-3",
                    "grid grid-cols-1 gap-8"
                )}
            >
                {
                    mates.length < 2 ? (
                        <div
                            className="sm:block hidden"
                        />
                    ) : null
                }
                {
                    mates.map((item: any, index: number) => {
                        return (
                            <MateCard
                                key={index}
                                image={item.image}
                                name={item.name}
                                position={item.position}
                                email={item.email}
                                nickname={item.nickname}
                                github={item.github}
                            />
                        )
                    })
                }
            </div>
            <div
                className="pt-20"
            >
                <History />
            </div>
        </div>
    )
}