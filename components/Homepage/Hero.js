
import Image from 'next/image'
const Hero = () => {
    return (
        <section className='container mx-auto'>
            <div>
                {/* <Image 
                    src='/images/site'
                    alt='An image of myself'
                    width={300}
                    height={300}
                
                /> */}
            </div>
            <h1 className='text-3xl font-bold underline text-center'>Hi, I'm Allen</h1>
            <p>I blog about web development - especially frontend frameworks like Angular and React</p>
        </section>
    )
}

export default Hero