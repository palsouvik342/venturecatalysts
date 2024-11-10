import Image from "next/image"
import { FC } from "react";

type ShowcaseGridItemProps = {
    link: string;
    imageUrl: string;
    companyName: string;
}
const ShowcaseGridItem: FC<ShowcaseGridItemProps> = ({ imageUrl, link, companyName }) => {
    return (
        <div className="p-4 flex items-center group ">
            <a href={link}>
                <Image
                    src={imageUrl}
                    width={130}
                    alt={companyName}
                    height={0}
                    className="grayscale group-hover:grayscale-0 transition-all duration-300"
                />
            </a>
        </div>
    )
}

export default ShowcaseGridItem
