const HeroSection = () => {
    return (
        <section>
            {/* For Desktop */}
            <div className='max-sm:hidden'>
                <div className="md:grid grid-cols-2">
                    <div className="md:grid md:grid-cols-2">
                        <div >
                            <div
                                className="group relative w-full h-[360px] bg-cover bg-center grayscale hover:grayscale-0 transition-all "
                                style={{ backgroundImage: 'url("/images/vikas_bagaria.jpg")' }}
                            >
                                <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-70 absolute bottom-0 w-full py-3 px-2 duration-400">
                                    <h4 className="text-white text-xl font-bold text-center">Vikas Bagaria</h4>
                                    <h4 className="text-white text-base font-bold text-center">Founder of PeeSafe</h4>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div
                                    className="group relative w-full h-[200px] bg-cover bg-center grayscale hover:grayscale-0 transition-all"
                                    style={{ backgroundImage: 'url("/images/summit_shah.jpg")' }}
                                >
                                    <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-70 absolute bottom-0 w-full py-3 px-2 duration-400">
                                        <h4 className="text-white text-xl font-bold text-center">Summit Shah</h4>
                                        <h4 className="text-white text-base font-bold text-center">Founder of Dukaan</h4>
                                    </div>
                                </div>
                                <div
                                    className="group relative  w-full h-[200px] bg-cover bg-center grayscale hover:grayscale-0 transition-all"
                                    style={{ backgroundImage: 'url("/images/harsh_shah.jpg")' }}
                                >
                                    <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-70 absolute bottom-0 w-full py-3 px-2 duration-400">
                                        <h4 className="text-white text-xl font-bold text-center">Harsh Shah</h4>
                                        <h4 className="text-white text-base font-bold text-center">Founder of Find</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <div
                                className="group relative w-full md:h-1/2 bg-cover bg-center grayscale hover:grayscale-0 transition-all"
                                style={{ backgroundImage: 'url("/images/shreyas_puneet.jpg")' }}
                            >
                                <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-70 absolute bottom-0 w-full py-3 px-2 duration-400">
                                    <h4 className="text-white text-xl font-bold text-center">Shreyas & Puneet</h4>
                                    <h4 className="text-white text-base font-bold text-center">Founders of Suprdaily</h4>
                                </div>
                            </div>
                            <div
                                className="group relative w-full h-1/2 bg-cover bg-center grayscale hover:grayscale-0 transition-all"
                                style={{ backgroundImage: 'url("/images/ashutosh_priyank.jpg")' }}
                            >
                                <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-70 absolute bottom-0 w-full py-3 px-2 duration-400">
                                    <h4 className="text-white text-xl font-bold text-center">Ashutosh & Priyank</h4>
                                    <h4 className="text-white text-base font-bold text-center">Founder of Beardo</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="grid grid-cols-3 h-1/2">
                            <div
                                className="group relative w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all"
                                style={{ backgroundImage: 'url("/images/jasmeet_thind.jpg")' }}
                            >
                                <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-70 absolute bottom-0 w-full py-3 px-2 duration-400">
                                    <h4 className="text-white text-xl font-bold text-center">Jasmeet Thind</h4>
                                    <h4 className="text-white text-base font-bold text-center">Founder of Coutloot</h4>
                                </div>
                            </div>
                            <div
                                className="group relative w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all"
                                style={{ backgroundImage: 'url("/images/saurabh_singh.jpg")' }}
                            >
                                <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-70 absolute bottom-0 w-full py-3 px-2 duration-400">
                                    <h4 className="text-white text-xl font-bold text-center">Saurabh Singh</h4>
                                    <h4 className="text-white text-base font-bold text-center">Founder of Flickstree</h4>
                                </div>
                            </div>
                            <div
                                className="group relative w-full h-full bg-cover bg-center grayscale hover:grayscale-0 transition-all"
                                style={{ backgroundImage: 'url("/images/ritesh_malik.jpg")' }}
                            >
                                <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-70 absolute bottom-0 w-full py-3 px-2 duration-400">
                                    <h4 className="text-white text-xl font-bold text-center">Ritesh Malik</h4>
                                    <h4 className="text-white text-base font-bold text-center">Founder of Innov8</h4>
                                </div>
                            </div>
                        </div>
                        <div className=" h-1/2">
                            <div className="bg-[--primary-theme-color] w-full h-full flex items-center p-10">
                                <h1 className="text-4xl font-medium text-black ">Creating the World’s Largest Early Stage Startup Ecosystem</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* For Mobile */}
            <div className="max-sm:block md:hidden">
                <div
                    className="group relative w-full h-80 bg-cover bg-center grayscale hover:grayscale-0 transition-all"
                    style={{ backgroundImage: 'url("/images/ashutosh_priyank.jpg")' }}
                >
                    <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-70 absolute bottom-0 w-full py-3 px-2 duration-400">
                        <h4 className="text-white text-xl font-bold text-center">Ashutosh & Priyank</h4>
                        <h4 className="text-white text-base font-bold text-center">Founder of Beardo</h4>
                    </div>
                </div>

                <div className="grid grid-cols-2">
                    <div
                        className="group relative w-full h-[200px] bg-cover bg-center grayscale hover:grayscale-0 transition-all"
                        style={{ backgroundImage: 'url("/images/summit_shah.jpg")' }}
                    >
                        <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-70 absolute bottom-0 w-full py-3 px-2 duration-400">
                            <h4 className="text-white text-xl font-bold text-center">Summit Shah</h4>
                            <h4 className="text-white text-base font-bold text-center">Founder of Dukaan</h4>
                        </div>
                    </div>
                    <div
                        className="group relative  w-full h-[200px] bg-cover bg-center grayscale hover:grayscale-0 transition-all"
                        style={{ backgroundImage: 'url("/images/harsh_shah.jpg")' }}
                    >
                        <div className="opacity-0 group-hover:opacity-100 transition-all bg-black bg-opacity-70 absolute bottom-0 w-full py-3 px-2 duration-400">
                            <h4 className="text-white text-xl font-bold text-center">Harsh Shah</h4>
                            <h4 className="text-white text-base font-bold text-center">Founder of Find</h4>
                        </div>
                    </div>
                </div>
                <div className="bg-[--primary-theme-color] w-full h-full flex items-center p-10">
                    <h1 className="text-3xl font-bold text-white ">Venture Catalysts is India’s top incubator for startups.</h1>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
