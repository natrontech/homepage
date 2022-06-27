import ExportedImage from "next-image-export-optimizer";
import OfferingCard from "./OfferingCard";

export default function Offering() {
    return (
        <div>
            <div
                className="sm:mb-20 mb-10"
            >
                <div
                    className="relative w-auto sm:h-96 h-16 mx-auto"
                >
                    <ExportedImage
                        className="pointer-events-none"
                        src="/images/quotes/services-quote.png"
                        alt="Catch Phrase"
                        layout="fill"
                        objectFit='contain'
                    // unoptimized={true}
                    />
                </div>
            </div>
            <div
                className="grid sm:grid-cols-3 grid-cols-1 gap-8"
            >
                <OfferingCard
                    image="/images/illustrations/cloud-migration.png"
                    title="Cloud ready"
                    description="We setup your cloud infrastructure the right way so you can work without any problems."
                />
                <OfferingCard
                    image="/images/illustrations/cloud-migration.png"
                    title="Cloud ready"
                    description="We setup your cloud infrastructure the right way so you can work without any problems."
                />
                <OfferingCard
                    image="/images/illustrations/cloud-migration.png"
                    title="Cloud ready"
                    description="We setup your cloud infrastructure the right way so you can work without any problems."
                />
            </div>
        </div>
    )
}