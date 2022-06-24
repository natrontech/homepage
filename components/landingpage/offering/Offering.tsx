import OfferingCard from "./OfferingCard";

export default function Offering() {
    return (
        <div>
            <div
                className="mb-20"
            >
                <h1
                    className="sm:text-9xl text-3xl font-GilroyBold text-center"
                >
                    What <span className="text-primary">we</span> can <span className="text-primary">offer</span> you
                </h1>
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