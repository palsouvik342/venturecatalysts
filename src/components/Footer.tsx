import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className=''>
            <div className='bg-[#434343] pt-20 pb-0 max-sm:px-4'>
                <div className="container">
                    <div className="md:grid md:grid-cols-3 gap-16">
                        <div className="footer-logo-wrapper max-sm:py-5">
                            <Image
                                src="/images/footer--logo.svg"
                                width={300}
                                alt="logo"
                                height={0}
                            />
                        </div>
                        <div>
                            <ul className='flex md:justify-between max-sm:justify-start max-sm:gap-5'>
                                <li className='text-white text-[18px]'>
                                    <Link href="/">Terms</Link>
                                </li>
                                <li className='text-white text-[18px]'>
                                    <Link href="/">Privacy</Link>
                                </li>
                                <li className='text-white text-[18px]'>
                                    <Link href="/">Contact</Link>
                                </li>
                            </ul>
                            <div className="md:flex md:justify-between mt-6 max-sm:my-6 items-center">
                                <h4 className='text-[#828282]'>
                                    Follow us on
                                </h4>
                                <ul className='flex gap-4 '>
                                    <li>
                                        <a
                                            href="#"
                                            className='hover:bg-[--primary-theme-color] transition-all duration-300  rounded-full inline-block p-2'
                                        >
                                            <Image
                                                src="/images/facebook.svg"
                                                width={25}
                                                alt="logo"
                                                height={0}
                                                className='invert'
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className='hover:bg-[--primary-theme-color] transition-all duration-300  rounded-full inline-block p-2'
                                        >
                                            <Image
                                                src="/images/twitter.svg"
                                                width={25}
                                                alt="logo"
                                                height={0}
                                                className='invert'
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className='hover:bg-[--primary-theme-color] transition-all duration-300  rounded-full inline-block p-2'
                                        >
                                            <Image
                                                src="/images/linkedin.svg"
                                                width={25}
                                                alt="logo"
                                                height={0}
                                                className='invert'
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className='hover:bg-[--primary-theme-color] transition-all duration-300  rounded-full inline-block p-2'
                                        >
                                            <Image
                                                src="/images/youtube.svg"
                                                width={25}
                                                alt="logo"
                                                height={0}
                                                className='invert'
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className='hover:bg-[--primary-theme-color] transition-all duration-300  rounded-full inline-block p-2'
                                        >
                                            <Image
                                                src="/images/instagram.svg"
                                                width={25}
                                                alt="logo"
                                                height={0}
                                                className='invert'
                                            />
                                        </a>
                                    </li>

                                </ul>
                            </div>

                        </div>
                        <div>
                            <ul>
                                <li className='pb-3.5'>
                                    <a
                                        href="tel: (+91) 91361 25086"
                                        className='flex text-white gap-2'
                                    >
                                        <PhoneIcon className='size-6' />
                                        <span className='hover:text-[--primary-theme-color] transition-all duration-300 font-bold'>(+91) 91361 25086</span>
                                    </a>
                                </li>
                                <li className='pb-3.5'>
                                    <a
                                        href="mailto: info@venturecatalysts.in"
                                        className='flex text-white gap-2'
                                    >
                                        <EnvelopeIcon className='size-6' />
                                        <span className='hover:text-[--primary-theme-color] transition-all duration-300 font-bold'>info@venturecatalysts.in</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='md:grid md:grid-cols-2 pt-10'>
                        <div className='max-sm:py-2'>
                            <h4 className='font-bold text-white py-3'>Venture Catalyst Angel Growth Fund</h4>
                            <p className='text-white text-sm py-1'>Name of Fund Manager - Venture Catalysts Angel Growth Fund Manager LLP.</p>
                            <p className='text-white text-sm py-1'>Category of AIF- Category I AIF – Venture Capital Fund – Angel Fund</p>
                            <p className='text-white text-sm py-1'>SEBI Registration No(s) - IN/AIF1/18-19/0653</p>
                        </div>
                        <div className='max-sm:py-2'>
                            <h4 className='font-bold text-white py-3'>Venture Catalyst Angel Fund</h4>
                            <p className='text-white text-sm py-1'>Name of Fund Manager - Venture Catalyst Pvt. Ltd.</p>
                            <p className='text-white text-sm py-1'>Category of AIF- Category I AIF – VCF – Angel Fund</p>
                            <p className='text-white text-sm py-1'>SEBI Registration No(s) - IN/AIF1/22-23/1157</p>
                        </div>
                    </div>

                    <div className='py-14 max-sm:py-8'>
                        <p className='text-[#909090] text-[12px]'>
                            <span className='font-bold'>Disclaimer</span>:Venture Catalysts Private Limited (“VCAT”) is not a Stock Exchange nor does it intend to get recognized as a stock exchange under Securities Contracts Regulation Act, 1956. VCAT does not facilitate any online or offline buying, selling or dealing of securities, clearing or settlement of trades of securities. VCAT is not a network or a platform for the secondary market trading.

                        </p>
                    </div>
                </div>

            </div>
            <div className='bg-[#3c3c3c]'>
                <div className="container">
                    <div className='flex justify-between max-sm:flex-col max-sm:gap-y-3 items-center p-2 text-[#838383] text-[12px]'>
                        <p>Copyrights© 2020 Venture Catalyst</p>
                        <p>Designed by Notebrains</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
