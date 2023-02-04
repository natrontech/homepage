import ExportedImage from "next-image-export-optimizer";
import Button, { ButtonType } from "../../general/Button";
import Tilt from "react-parallax-tilt";

export default function ServiceCard({
  image,
  title,
  description,
  buttonText,
  onClick,
}: {
  image: string;
  title: string | null;
  description: string | null;
  buttonText: string;
  onClick?: () => void;
}) {
  return (
    <div className="border-8 grid grid-rows-2 h-auto border-white sm:w-full xl:w-96 w-full m-auto">
      <div className=" row-span-1 sm:hover:scale-110 active:hover:scale-105 transition-all duration-150 ease-in-out">
        <Tilt className="h-4/5 mt-5">
          <ExportedImage
            className="pointer-events-none"
            src={image}
            alt="Catch Phrase"
            objectFit="contain"
            layout="fill"
          />
        </Tilt>
      </div>
      <div className="p-5 relative row-span-1 border-t-8 border-white">
        <h1 className="sm:text-2xl text-3xl font-GilroyBold mb-4 15">
          {title}
        </h1>
        <p className="text-md mb-4 h-20 overflow-scroll scrollbar-hide">
          {description}
        </p>
        <Button
          buttonType={ButtonType.Primary}
          buttonText={buttonText}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
