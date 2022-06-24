import ExportedImage from "next-image-export-optimizer";

export default function Herosection() {
    return (
        <div
            className=""
        >
            <div
                className=""
            >
                <ExportedImage
                    className="w-12 h-12 sm:w-20 sm:h-20 pointer-events-none"
                    src="/images/quotes/hero-quote.png"
                    alt="Catch Phrase"
                    layout="fill"
                    objectFit='contain'
                // unoptimized={true}
                />
            </div>
        </div>
    )
}