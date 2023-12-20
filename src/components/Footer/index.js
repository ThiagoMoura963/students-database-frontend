import "./Footer.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__item-list">
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/thiago-moura-b3b211207/">
                            <FaLinkedin size={45}/>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://github.com/ThiagoMoura963">
                            <FaGithub size={45}/>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="https://www.instagram.com/thiagomoura963/">
                            <FaInstagram size={45}/>
                        </a>
                    </li>
                </ul>
            </div>
            <p className="footer__text">Desenvolvido por Thiago Moura.</p>
        </footer>
    )
}

export default Footer;