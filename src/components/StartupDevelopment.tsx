import { BanknotesIcon, ChartPieIcon, Cog6ToothIcon, GlobeAltIcon, LinkIcon, WifiIcon } from '@heroicons/react/24/outline'
import { FC } from 'react'

type StartupDevelopmentElementProps = {
    Icon: React.FC<React.SVGProps<SVGSVGElement>>,
    title: string
}
const StartupDevelopmentElement: FC<StartupDevelopmentElementProps> = ({ Icon, title }) => {
    return (
        <div className="flex flex-col items-center gap-y-2 py-8 max-sm:w-1/2">
            <Icon className="size-20 stroke-1 text-[--primary-theme-color]" />
            <h4 className="text-[#7A7A7A] text-xl font-bold max-sm:text-center">{title}</h4>
        </div>
    )
}

const StartupDevelopment = () => {
    return (
        <section className="py-20 bg-[#fbfbfb]">
            <div className="container">
                <div className="section-title text-center">
                    <span className="text-[--primary-theme-color]">Integrated Approach</span>
                    <h2 className="py-3 text-4xl font-bold">Startup Development</h2>
                    <p className="text-xl text-[--secondary-text-color]">
                        We bundle together all the elements that help startups become more successful
                    </p>
                </div>
                <div className="startup-development-elements pt-16">
                    <div className="md:grid md:grid-cols-3 max-sm:flex max-sm:flex-wrap max-sm:p-2">
                        <StartupDevelopmentElement Icon={BanknotesIcon} title="Continuous Capital" />
                        <StartupDevelopmentElement Icon={LinkIcon} title="Corporate Connects" />
                        <StartupDevelopmentElement Icon={ChartPieIcon} title="Gap Based Mentoring" />
                        <StartupDevelopmentElement Icon={GlobeAltIcon} title="Global Market Access" />
                        <StartupDevelopmentElement Icon={WifiIcon} title="Resourceful Network" />
                        <StartupDevelopmentElement Icon={Cog6ToothIcon} title="Sector Specific Expertise" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StartupDevelopment