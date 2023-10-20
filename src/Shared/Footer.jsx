import { Link } from "react-router-dom";


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
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <p className="text-left p-4">Developved by - ©<Link to='https://www.linkedin.com/in/turzacse/' className="text-blue-500">Turza</Link></p>

        </div>
    );
};

export default Footer;