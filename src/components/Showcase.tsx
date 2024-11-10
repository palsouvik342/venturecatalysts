import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from "next/link"
import ShowcaseGrid from "./showcase/ShowcaseGrid"

const Showcase = () => {
    return (
        <section className="py-28 max-sm:py-14">
            <div className="container">
                <div className="md:flex max-sm:p-4">
                    <div className="md:w-5/12 pe-20 flex flex-col justify-center">
                        <div className="section-title">
                            <span className="text-[--primary-theme-color]">Showcase</span>
                            <h2 className="py-3 text-4xl font-bold">Portfolio</h2>
                            <p className="text-xl text-[--secondary-text-color]">Since 2016, Venture Catalysts has backed over 110 startups across multiple sectors. We take immense pride in our founders achievements.</p>
                        </div>
                        <Link href="/" className="group flex gap-2 items-center mt-10">
                            <div className="w-10 h-10 flex items-center justify-center border-2 border-[--primary-theme-color] rounded-full group-hover:bg-[--primary-theme-color]">
                                <ChevronRightIcon
                                    className="size-7 text-[--primary-theme-color] group-hover:text-white transition-all duration-300"
                                />
                            </div>
                            <span className="text-xl font-bold text-[--primary-theme-color]">
                                See all
                            </span>
                        </Link>
                    </div>
                    <div className="md:w-7/12">
                        <ShowcaseGrid />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Showcase
