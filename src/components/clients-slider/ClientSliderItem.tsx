import Image from 'next/image'

const ClientSliderItem = ({ client }: { client: string }) => {
    return (
        <div className='h-12'>

            <Image
                src={client}
                alt="client"
                fill={true}
                className='grayscale hover:grayscale-0 transition-all duration-300'
            />
        </div>
    )
}

export default ClientSliderItem
