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
            nickname: "THE FULLSTACK EVERYTHING"
        }
    ]
    return (
        <div
            id="about"
            className="pt-20"
        >
            <h1
                className="sm:text-xxl text-5xl font-GilroyBold text-center mb-20"
            >
                We are <span className="text-primary">helping</span> you
            </h1>
            <div
                className={classNames(
                    mates.length == 2 ? "sm:grid-cols-2" : "sm:grid-cols-3",
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