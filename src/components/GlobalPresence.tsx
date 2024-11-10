import Image from "next/image"
import LocationItem from "./global-presence/LocationItem";

const GlobalPresence = () => {
    const locations = ["India", "Singapore", "UAE", "USA", "UK"];

    return (
        <section className="pt-20 max-sm:px-4">
            <div className="container">
                <div className="md:flex">
                    <div className="md:w-4/12">
                        <div className="section-title">
                            <span className="text-[--primary-theme-color]">Worldwide</span>
                            <h2 className="py-3 text-4xl font-bold">Our Presence</h2>
                            <p className="text-xl text-[--secondary-text-color]">Creating global community</p>
                            <ul className="flex flex-wrap pt-8">
                                {
                                    locations.map((location, index) => (
                                        <LocationItem key={index} location={location} />
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="md:w-8/12">
                        <div className="md:w-8/12">
                            <Image
                                src="/images/our-presence.png"
                                alt="Banner"
                                width={900}
                                height={0}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GlobalPresence
