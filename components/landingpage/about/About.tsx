import History from "./History";
import MateCard from "./MateCard";

export default function About() {
    return (
        <div
            id="about"
            className="pt-20"
        >
            <h1
                className="sm:text-xxl text-6xl font-GilroyBold text-center mb-20"
            >
                <span
                    className="text-primary"
                >
                    We
                </span>
                &nbsp;are helping you
            </h1>
            <div
                className="grid sm:grid-cols-3 grid-cols-1 gap-8"
            >
                <MateCard 
                    image="/images/mates/janlauber.jpeg"
                    name="Jan Lauber"
                    position="Founder"
                />
                <MateCard 
                    image="/images/mates/generic.jpeg"
                    name="Sample Mate"
                    position="Sample Position"
                />
                <MateCard 
                    image="/images/mates/generic.jpeg"
                    name="Sample Mate"
                    position="Sample Position"
                />
            </div>
            <div
                className="pt-20"
            >
                <History />
            </div>
        </div>
    )
}