
import myImage from '../assets/images/sajjad2.png'
import Typewriter from 'react-ts-typewriter'
import { Fade } from 'react-awesome-reveal'


const Bannar = () => {
    
    return (
        <div id='home' className="bg-green-400 px-5 lg:px-16 py-6">
            <div className="flex gap-10 justify-around items-center flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <Fade direction='down'>
                        <img
                            src={myImage}
                            className="lg:w-96 w-80 h-80 lg:ml-28 lg:h-96 object-fill 
                        rounded-full border-purple-500 border-2" />
                    </Fade>
                </div>
                <div className='flex-1  lg:text-left'>
                    <Fade direction='down'>
                        <p className='font-bold text-2xl text-pink-500 pb-2'>Hello! I'm</p>

                        <h1 className="text-3xl lg:text-4xl font-bold">
                            <Typewriter loop={true} speed={300} text="Frontend Web Developer" />

                        </h1>
                    </Fade>
                    <Fade>
                        <p className="py-6 font-semibold text-black/70">
                            As a Frontend Web Developer, I specialize in transforming ideas into visually engaging
                            and highly functional digital experiences. With a keen eye for design and a passion for clean, efficient code,
                            I build responsive, user-friendly, and performance-optimized websites that captivate users.
                        </p>
                    </Fade>
                    <Fade direction='up'>
                        <button className="btn bg-gradient-to-r from-indigo-500 text-white to-pink-500 
                    hover:from-teal-500 hover:to-red-500">Download Resume</button>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Bannar
