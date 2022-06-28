import Button, { ButtonType } from "../general/Button";

export default function Attention() {

    return (
        <div
            className="py-20 mt-20 px-10"
        >
            <h1
                className="sm:text-7xl text-5xl font-GilroyBold text-center"
            >
                Have we got your attention?
            </h1>
            <a
                href="mailto:info@natron.io"
            >
                <div
                    className="w-52 mx-auto mt-10"
                >
                    <Button buttonType={ButtonType.Secondary} buttonText="Get in touch" />
                </div>
            </a>
        </div>
    )

}