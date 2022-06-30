
import { Children, useState } from "react";
import { ServiceDescriptionContent } from "../../../content/services";

export default function ServiceDescription() {
    return (
        <div>
            <h1 className="text-center text-4xl mb-10">
                Service description
            </h1>
            <ServiceDescriptionContent />
        </div>
    )
}