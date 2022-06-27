import ExportedImage from "next-image-export-optimizer";

export default function Herosection() {
    return (
        <div
            className="relative w-auto h-screen mx-auto"
            id="hero"
        >
            <div
                className="sm:block hidden"
            >
                <ExportedImage
                    className="pointer-events-none"
                    src="/images/quotes/hero-quote.png"
                    alt="Catch Phrase"
                    layout="fill"
                    objectFit='contain'
                // unoptimized={true}
                />
            </div>
            <div
                className="sm:hidden block"
            >
                <ExportedImage
                    className="pointer-events-none"
                    src="/images/quotes/hero-quote-mobile.png"
                    alt="Catch Phrase"
                    layout="fill"
                    objectFit='contain'
                // unoptimized={true}
                />
            </div>
        </div>
    )
}