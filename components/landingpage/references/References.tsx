import ExportedImage from "next-image-export-optimizer";
import Tilt from "react-parallax-tilt";
import { classNames } from "../../../lib/design";

export default function References() {
  const firms = [
    {
      name: "Netrics",
      link: "https://netrics.ch",
      image: "/images/firms/netrics.png",
    },
    {
      name: "BRF-Solutions",
      link: "https://brf-solutions.ch",
      image: "/images/firms/brf-solutions.png",
    },
    {
      name: "Golog",
      link: "https://golog.ch",
      image: "/images/firms/golog.png",
    },
  ];
  return (
    <div id="references" className="pt-20">
      <h1 className="lg:text-xxl sm:text-8xl text-5xl font-GilroyBold text-center mb-20">
        <span className="text-primary">Trusted</span> by
      </h1>
      <div>
        <div
          className={classNames(
            firms.length > 2 ? "sm:grid-cols-3" : "sm:grid-cols-2",
            "grid grid-cols-1 gap-4 sm:gap-10",
          )}
        >
          {firms.map((item: any, index: number) => {
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="col-span-1 flex justify-center py-8 px-8 bg-transparent cursor-pointer">
                  <div className="h-10 w-40 relative m-auto">
                    <ExportedImage
                      className="pointer-events-none"
                      src={item.image}
                      alt={item.name}
                      objectFit="contain"
                      layout="fill"
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
