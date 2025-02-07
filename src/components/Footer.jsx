import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import footerLogo from '../assets/images/footer.png'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer bg-neutral text-neutral-content pt-10 pb-4 lg:px-16">
                    <aside>
                        <figure>
                            <img src={footerLogo} alt="footerlogo" className='w-24' />
                        </figure>
                        <p>
                            Mohammad Sajjad Hossain.
                            <br />
                            Frontend Web Developer since 2024
                        </p>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Links</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Skills</a>
                        <a className="link link-hover">Project</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <div className="grid grid-flow-col gap-4">
                            <a href='https://www.linkedin.com/in/sajjad56/' target='_blank'>
                                <FaLinkedin className='text-3xl bg-blue-800 rounded'></FaLinkedin>
                            </a>
                            <a href='https://web.facebook.com/profile.php?id=100025394227619' target='_blank'>
                                <FaFacebook className='text-3xl bg-blue-500 rounded-full'></FaFacebook>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className='footer-center text-neutral-content border-t-[1px] py-4 bg-black/90 lg:px-16'>
                    <aside>
                        <p>Copyright © {new Date().getFullYear()} - All right reserved by Mohammad Sajjad Hossain</p>
                    </aside>
                </div>
            </footer>

        </div>
    )
}

export default Footer