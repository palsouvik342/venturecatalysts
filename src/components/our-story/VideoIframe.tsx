interface VideoIframeProps {
    videoId: string;
    onLoad: () => void;
    isVisible: boolean;
}

const VideoIframe: React.FC<VideoIframeProps> = ({ videoId, onLoad, isVisible }) => {
    return (
        <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            width="100%"
            height="100%"
            onLoad={onLoad}
            className={!isVisible ? "hidden" : ""}
        />
    );
}

export default VideoIframe;
