import { FC } from "react";

type LocationItemProps = {
    location: string;
}

const LocationItem: FC<LocationItemProps> = ({ location }) => {
    return (
        <li className="w-1/2 py-2 text-xl text-[--primary-theme-color]">
            {location}
        </li>
    )
}

export default LocationItem
