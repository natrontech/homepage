import { classNames } from "../../../lib/design";
import History from "./History";
import MateCard from "./MateCard";

export default function About() {
  const mates = [
    {
      image: "/images/mates/janlauber.jpeg",
      name: "Jan Lauber",
      position: "Founder | Cloud Engineer",
      email: "jan.lauber@natron.io",
      nickname: "THE FULLSTACK EVERYTHING",
      github: "janlauber",
    },
    {
      image: "/images/mates/janfuhrer.jpeg",
      name: "Jan Fuhrer",
      position: "Cloud Engineer",
      email: "jan.fuhrer@natron.io",
      nickname: "THE CLOUD DIVER",
      github: "janfuhrer",
    },
    {
      image: "/images/mates/alexfuhrer.jpeg",
      name: "Alex Fuhrer",
      position: "Accountant",
      email: "alex.fuhrer@natron.io",
      nickname: "THE NUMBERS JUGGLER",
    },
    {
      image: "/images/mates/svengerber.jpeg",
      name: "Sven Gerber",
      position: "Cloud Engineer",
      email: "sven.gerber@natron.io",
      nickname: "THE AUTOMATION CAPTAIN",
      github: "svengerber",
    },
    {
      image: "/images/mates/joelhaeberli.jpeg",
      name: "Joel Häberli",
      position: "Software Architect",
      email: "joel.haeberli@natron.io",
      nickname: "THE ABSTRACTION HUNTER",
      github: "Joel-Haeberli",
    },
    {
      image: "/images/mates/davidraez.jpeg",
      name: "David Räz",
      position: "Consultant | Sales",
      email: "david.raez@natron.io",
      nickname: "THE MARKET MAESTRO",
      github: "davidraez",
    }
  ];
  return (
    <div id="about" className="pt-20">
      <h1 className="lg:text-xxl sm:text-8xl text-5xl font-GilroyBold text-center mb-2">
        We <span className="text-primary">rise</span> by lifting{" "}
        <span className="text-primary">others</span>
      </h1>
      <p className="text-lg mb-20 text-center text-gray-300">#risewithus</p>
      <div
        className={classNames(
          mates.length % 2 == 0 ? "sm:grid-cols-2 sm:gap-24" : "lg:grid-cols-3",
          "grid grid-cols-1 gap-8",
        )}
      >
        {mates.length < 2 ? <div className="sm:block hidden" /> : null}
        {mates.map((item: any, index: number) => {
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
          );
        })}
      </div>
      <div className="pt-20">
        <History />
      </div>
    </div>
  );
}
