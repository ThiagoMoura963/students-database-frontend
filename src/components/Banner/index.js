import styles from "./Banner.module.css"
import BannerLink from "../BannerLink";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Banner = () => {
    const [menuShow, setMenuShow] = useState(false);

    const handleMenuShow = () => {
        setMenuShow(!menuShow);
    }

    return (
        <header>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <h1>Students Database</h1>
                </div>
                <div className={styles.navList}>
                    <ul>
                        <li className={styles.navItem}>
                            <BannerLink to="/">
                                Cadastrar Aluno
                            </BannerLink>
                        </li>
                        <li className={styles.navItem}>
                            <BannerLink to="/cursos">
                                Cadastrar Curso
                            </BannerLink>
                        </li>
                        <li className={styles.navItem}>
                            <BannerLink to="/registros">
                                Registros
                            </BannerLink>
                        </li>
                    </ul>
                </div>

                <div className={styles.mobileMenuIcon}>
                    <button onClick={() => handleMenuShow()}>
                        {!menuShow ? (
                           <IoIosMenu size={40} color="white" />
                        ) : (
                            <IoClose size={40} color="white" />
                        )}
                    </button>
                </div>
            </nav>

            <div className={`${styles.mobileMenu} ${menuShow ? styles.open : ""}`}>
                <ul>
                    <li className={styles.navItem}>
                        <BannerLink to="/">
                            Cadastrar Aluno
                        </BannerLink>
                    </li>
                    <li className={styles.navItem}>
                        <BannerLink to="/cursos">
                            Cadastrar Curso
                        </BannerLink>
                    </li>
                    <li className={styles.navItem}>
                        <BannerLink to="/registros">
                            Registros
                        </BannerLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Banner;