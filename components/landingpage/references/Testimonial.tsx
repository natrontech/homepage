import ExportedImage from "next-image-export-optimizer";

/* This example requires Tailwind CSS v2.0+ */
export default function Testimonial({
  logoimage,
  personimage,
  name,
  position,
}: {
  logoimage: string;
  personimage: string;
  name: string;
  position: string;
}) {
  return (
    <section className="py-12 overflow-hidden md:py-20 lg:py-24 border-8 border-primary">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="h-10 w-32 relative m-auto">
            <ExportedImage
              className="pointer-events-none"
              src={logoimage}
              alt="Logo"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nemo expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.&rdquo;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <div className="h-14 w-14 relative m-auto ">
                    <ExportedImage
                      className="pointer-events-none rounded-full"
                      src={personimage}
                      alt="Logo"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-GilroyMedium">{name}</div>

                  <svg
                    className="hidden md:block mx-1 h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-200">
                    {position}
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
