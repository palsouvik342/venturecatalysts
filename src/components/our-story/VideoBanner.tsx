import { PlayIcon } from "@heroicons/react/16/solid";

interface VideoBannerProps {
    onPlay: () => void;
}

const VideoBanner: React.FC<VideoBannerProps> = ({ onPlay }) => {
    return (
        <div className="h-full">
            <img src="/images/video-bnnr.jpg" alt="Banner" className="h-full max-sm:object-cover" />
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 rounded-full p-5 cursor-pointer"
                onClick={onPlay}
            >
                <PlayIcon className="h-10 w-10 text-white" />
            </div>
        </div>
    );
}

export default VideoBanner;
