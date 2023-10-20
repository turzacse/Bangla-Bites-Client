import { Link } from "react-router-dom";
import { FaLinkedinIn, FaFacebook, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className="bg-base-200">
            <footer className="footer p-10  text-base-content">
                <aside>
                    <img className="h-[80px] rounded-full" src='https://i.ibb.co/Krmz5xN/Bangla-Bites.jpg' alt="" />
                    <p className="font-bold">Bangla Bites<br />Providing reliable food since 2022</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <ul className="flex flex-col gap-1 font-medium text-blue-800">
                    <li className="">Friendly greeting</li>
                    <li className="">Attentive waitstaff</li>
                    <li className="">Quality food</li>
                    <li className="">Clean environment</li>
                    </ul>
                </nav>
                <nav>
                    <header className="footer-title">Brands</header>
                    <a className="link link-hover">Coca-cola</a>
                    <a className="link link-hover">McDonald's</a>
                    <a className="link link-hover">Starbucks</a>
                    <a className="link link-hover">Pizza Hut</a>
                </nav>
                <nav>
                    <header className="footer-title">About</header>
                    <p>404/A, Eye Care, <br /> BSMRSTU,Gopalgonj</p>
                    <header className="footer-title mt-5">Contact</header>
                    <p className="flex gap-4 text-xl">
                        <Link to='https://www.linkedin.com/in/turzacse/'><FaLinkedinIn></FaLinkedinIn></Link>
                        <Link to='https://web.facebook.com/fahimmontasir.siam/'><FaFacebook></FaFacebook></Link>
                        <Link to='https://github.com/turzacse'><FaGithub></FaGithub></Link>
                    </p>
                </nav>
            </footer>
            <p className="text-left p-4">Developved by - ©<Link to='https://www.linkedin.com/in/turzacse/' className="text-blue-500">Turza</Link></p>

        </div>
    );
};

export default Footer;