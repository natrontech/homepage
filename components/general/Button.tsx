export enum ButtonType {
    Primary = "primary",
    Secondary = "secondary",
    PrimaryOutline = "primaryOutline",
    SecondaryOutline = "secondaryOutline",
}

export default function Button({ buttonType, buttonText, onClick }: { buttonType: ButtonType, buttonText: string, onClick?: () => void }) {

    switch (buttonType) {
        case ButtonType.Primary:
            return (
                <button
                    className="bg-primary text-white font-GilroyBold text-lg py-4 px-12"
                    onClick={onClick}
                >
                    {buttonText}
                </button>
            )
        case ButtonType.Secondary:
            return (
                <button
                    className="bg-white text-primary font-GilroyBold text-lg py-4 px-12"
                    onClick={onClick}
                >
                    {buttonText}
                </button>
            )
        case ButtonType.PrimaryOutline:
            return (
                <button
                    className="border-primary border-4 text-primary font-GilroyBold text-lg py-3 px-11"
                    onClick={onClick}
                >
                    {buttonText}
                </button>
            )
        case ButtonType.SecondaryOutline:
            return (
                <button
                    className="border-white border-4 text-white font-GilroyBold text-lg py-3 px-11"
                    onClick={onClick}
                >
                    {buttonText}
                </button>
            )
        default:
            return (
                <>
                </>
            )
    }
}