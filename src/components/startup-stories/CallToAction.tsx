import Link from 'next/link';
import { FC } from 'react'

type CallToActionProps = {
    link: string;
    text: string;
}

const CallToAction: FC<CallToActionProps> = ({ link, text }) => {
    return (
        <Link href={link} className='px-14 text-center max-sm:px-8 py-4 inline-block bg-white rounded-full text-[--primary-theme-color] border border-[--primary-theme-color] hover:bg-transparent hover:text-white border-white transition-all duration-300'>
            {text}
        </Link>
    )
}

export default CallToAction
