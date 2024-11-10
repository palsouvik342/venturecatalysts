import { useState } from "react";
import VideoBanner from "./our-story/VideoBanner";
import VideoIframe from "./our-story/VideoIframe";


const OurStory = () => {
    const [showVdo, setShowVdo] = useState<boolean>(false);
    const [loadVdo, setLoadVdo] = useState<boolean>(false);

    return (
        <section className="our-story-section relative py-20 after:bg-[#fbfbfb] after:h-[300px] after:w-full after:absolute after:left-0 after:top-0 after:right-0 after:z-[-1] max-sm:px-4">
            <div className="container">
                <div className="section-title text-center">
                    <span className="text-[--primary-theme-color]">Introduction</span>
                    <h2 className="py-3 text-4xl font-bold">Our Story</h2>
                </div>
                <div className="pt-16 relative">
                    <div className="h-[500px]">
                        {!showVdo && <VideoBanner onPlay={() => setLoadVdo(true)} />}
                        {loadVdo && <VideoIframe videoId="KynLTrHB4bg" onLoad={() => setShowVdo(true)} isVisible={showVdo} />}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurStory;
